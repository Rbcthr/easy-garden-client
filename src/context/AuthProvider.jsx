import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    return signOut(auth);
  }

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const userInfo = {
    userSignUp,
    userSignInWithGoogle,
    userSignIn,
    userSignOut,
    user,
    setUser
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
