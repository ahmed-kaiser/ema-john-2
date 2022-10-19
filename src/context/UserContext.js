import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const UserAuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogIn = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userGoogleLogIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const userGithubLogIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const userFacebookLogIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, facebookProvider);
  }

  const userLogOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, { displayName: name });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (person) => {
      if (person) {
        setUser(person);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });

    return () => unSubscribe();
  }, []);

  const userData = {
    user,
    isLoading,
    createUser,
    userLogIn,
    userGoogleLogIn,
    userLogOut,
    updateUserProfile,
    userGithubLogIn,
    userFacebookLogIn,
  };
  return (
    <UserAuthContext.Provider value={userData}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserContext;
