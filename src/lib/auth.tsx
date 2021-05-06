import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import customMessage from 'data/customMessage.json';
import firebase from './firebase';
import { createUser } from './db';
import { authContextPops, authErrorResponse } from 'interfaces';
import { translate } from 'utils/translate';

const codeForgotEmailInfo = 'auth/email-forgot-password-has-send';
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

const authContext = createContext<authContextPops | undefined>(undefined);

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
  const [msg, setMsg] = useState<authErrorResponse>();

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
    setMsg(undefined);
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
      setMsg(translate(error));
      setLoading(false);
    }
  };

  const sendEmailConfirmation = async (redirect?: string) => {
    try {
      await firebase.auth().currentUser?.sendEmailVerification();
      if (redirect) {
        Router.push(redirect);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createUserWithEmailAndPassword = async (
    email: string,
    password: string,
    redirect: string,
    rest: any
  ) => {
    setLoading(true);
    setMsg(undefined);
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      if (response) {
        handleUser({ ...response.user, ...rest }, true);
        sendEmailConfirmation(redirect);
      }
    } catch (error) {
      setMsg(translate(error));
      setLoading(false);
    }
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false, false));
  };

  const forgotPassword = async (emailAddress: string) => {
    const auth = firebase.auth();
    setLoading(true);
    setMsg(undefined);
    try {
      await auth.sendPasswordResetEmail(emailAddress);
      setMsg(
        customMessage.filter((val) => val.code === codeForgotEmailInfo)[0]
      );
      setLoading(false);
    } catch (e) {
      setMsg(translate(e));
      setLoading(false);
    }
  };

  useEffect(() => {
    setMsg(undefined);
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user?.emailVerified) {
        setMsg(undefined);
        handleUser(user, false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return {
    user,
    loading,
    msg,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    forgotPassword,
    signout,
    sendEmailConfirmation,
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
