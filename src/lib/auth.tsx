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
}

const authContext = createContext(null);

export const AuthProvider: React.FC = ({ children }) => {
  const auth: any = useFirebaseAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

const useFirebaseAuth = () => {
  const [user, setUser] = useState<boolean>();
  const [loading, setLoading] = useState(true);

  const handleUser = async (rawUser: any) => {
    if (rawUser) {
      const user: any = await formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, userWithoutToken);
      setUser(user);

      setLoading(false);
      return user;
    } else {
      setUser(false);
      setLoading(false);
      return false;
    }
  };

  const signInWithEmailAndPassword = (
    email: string,
    password: string,
    redirect: string
  ) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
      });
  };

  const createUserWithEmailAndPassword = (
    email: string,
    password: string,
    redirect: string
  ) => {
    setLoading(true);
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
      });
  };

  const signout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
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

const formatUser = async (user: userInfo) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};
