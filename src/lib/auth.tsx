import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import firebase from './firebase';
import { createUser } from './db';
import { authErrorResponse } from 'interfaces';
import { translate } from 'utils/translate';

interface userInfo {
  uid: any;
  email: any;
  displayName: any;
  providerData: { providerId: any }[];
  photoURL: any;
  emailVerified: boolean;
  isAnonymous: any;
  refreshToken: string;
  otherInfo: {
    lastname: string;
    name: string;
    phone: string;
    salonName?: string;
    type?: string;
  };
}

const authContext = createContext<any>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const auth = useFirebaseAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

const useFirebaseAuth = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState<authErrorResponse>();

  const handleUser = async (rawUser: any, shouldCreateNewUser?: boolean) => {
    if (rawUser) {
      const user: any = formatUser(rawUser, shouldCreateNewUser);
      const { token, ...userWithoutToken } = user;
      if (shouldCreateNewUser) {
        const currentUser = await firebase.auth().currentUser;
        currentUser?.updateProfile({
          displayName:
            userWithoutToken.salonName ||
            `${userWithoutToken.name} ${userWithoutToken.lastname}`,
        });
        createUser(user.uid, userWithoutToken);
      }
      setUser(user);
      setLoading(false);
      return user;
    } else {
      setUser(false);
      setLoading(false);
      return false;
    }
  };

  const signInWithEmailAndPassword = async (
    email: string,
    password: string,
    redirect: string
  ) => {
    setLoading(true);
    setError(undefined);
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (response) {
        handleUser({ ...response.user });
        if (redirect) {
          Router.push(redirect);
        }
      }
    } catch (error) {
      setError(translate(error));
      setLoading(false);
    }
  };

  const createUserWithEmailAndPassword = async (
    email: string,
    password: string,
    redirect: string,
    rest: any
  ) => {
    setLoading(true);
    setError(undefined);
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      if (response) {
        handleUser({ ...response.user, ...rest }, true);
        try {
          const sendVerificationEmail = await firebase
            .auth()
            .currentUser?.sendEmailVerification();
          if (redirect) {
            Router.push(redirect);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      setError(translate(error));
      setLoading(false);
    }
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false, false));
  };

  useEffect(() => {
    const unsubscribe = firebase
      .auth()
      .onIdTokenChanged((userId) => handleUser(userId, false));
    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    errors,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signout,
  };
};

const formatUser = (user: userInfo, shouldCreateNewUser?: boolean) => {
  const {
    uid,
    email,
    providerData,
    photoURL,
    emailVerified,
    isAnonymous,
    otherInfo,
    refreshToken,
  } = user;
  let formatedUserInfo: any = {
    uid,
    email,
    provider: providerData[0].providerId,
    photoUrl: photoURL,
    emailVerified,
    isAnonymous,
    name: otherInfo?.name,
    lastname: otherInfo?.lastname,
    phoneNumber: otherInfo?.phone,
  };
  if (otherInfo?.salonName) {
    formatedUserInfo = {
      uid,
      email,
      provider: providerData[0].providerId,
      photoUrl: photoURL,
      emailVerified,
      isAnonymous,
      phoneNumber: otherInfo?.phone,
      salonName: otherInfo?.salonName,
      type: otherInfo?.type,
    };
  } else if (otherInfo?.type) {
    formatedUserInfo = {
      uid,
      email,
      provider: providerData[0].providerId,
      photoUrl: photoURL,
      emailVerified,
      isAnonymous,
      name: otherInfo?.name,
      lastname: otherInfo?.lastname,
      phoneNumber: otherInfo?.phone,
      type: otherInfo?.type,
    };
  }
  if (shouldCreateNewUser) {
    return formatedUserInfo;
  }
  return {
    ...formatedUserInfo,
    refreshToken,
  };
};
