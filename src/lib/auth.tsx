import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import firebase from './firebase';
import { createUser } from './db';

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
  const [loading, setLoading] = useState(true);

  const handleUser = async (rawUser: any, shouldCreateNewUser: boolean) => {
    if (rawUser) {
      const user: any = formatUser(rawUser, shouldCreateNewUser);
      const { token, ...userWithoutToken } = user;
      if (shouldCreateNewUser) {
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
    redirect: string,
    rest: any
  ) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser({ ...response.user, ...rest });

        if (redirect) {
          Router.push(redirect);
        }
      });
  };

  const createUserWithEmailAndPassword = async (
    email: string,
    password: string,
    redirect: string,
    rest: any
  ) => {
    setLoading(true);
    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    if (response) {
      handleUser({ ...response.user, ...rest }, true);
      if (redirect) {
        Router.push(redirect);
      }
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
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signout,
  };
};

const formatUser = (user: userInfo, shouldCreateNewUser: boolean) => {
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
  const formatedUserInfo = {
    uid,
    email,
    name: otherInfo?.name,
    provider: providerData[0].providerId,
    photoUrl: photoURL,
    emailVerified,
    isAnonymous,
    lastname: otherInfo?.lastname,
    phoneNumber: otherInfo?.phone,
  };
  if (shouldCreateNewUser) {
    return formatedUserInfo;
  }
  return {
    ...formatedUserInfo,
    refreshToken,
  };
};
