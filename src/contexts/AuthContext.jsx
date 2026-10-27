import React, { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase/firebaseConfig";
import { AuthContext } from "./AuthContextValue";

const googleProvider = new GoogleAuthProvider();
// Request additional scopes for Google login
googleProvider.addScope("profile");
googleProvider.addScope("email");

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register a new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login with email and password
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout
  const logOut = () => {
    return signOut(auth);
  };

  // Google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Send password reset email
  const resetPassword = (email) => {
    if (!email?.trim()) {
      return Promise.reject(new Error("Email is required"));
    }

    return sendPasswordResetEmail(auth, email.trim());
  };

  // Update profile name and photo
  const updateProfileInfo = async (name, photoURL) => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error("No user logged in");
    }

    await updateProfile(currentUser, {
      displayName: name,
      photoURL: photoURL,
    });

    setUser({ ...currentUser });
  };

  // Listen for authentication changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      },
      (error) => {
        console.error("Authentication state error:", error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    updateProfileInfo,
    resetPassword,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
