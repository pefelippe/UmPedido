import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";

import { auth, provider } from "../lib/firebase";

interface AuthGoogleContextType {
  user: any;
  signInGoogle: () => void;
  logOut: () => void;
  setDemonstrationUser: () => void;
}

export const AuthGoogleContext = createContext<AuthGoogleContextType>({
  user: null,
  signInGoogle: () => {},
  logOut: () => {},
  setDemonstrationUser: () => {},
});

interface AuthGoogleProviderProps {
  children: ReactNode;
}

export const AuthGoogleProvider = ({ children }: AuthGoogleProviderProps) => {
  const [user, setUser] = useState<any | null>(null);
  const { login, logout } = useAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        login({
          id: user.uid,
          email: user.email || '',
          name: user.displayName || '',
        });
      } else {
        logout();
      }
    });

    return () => unsubscribe();
  }, [login, logout]);

  const signInGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      login({
        id: result.user.uid,
        email: result.user.email || '',
        name: result.user.displayName || '',
      });
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      logout();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const setDemonstrationUser = () => {
    setUser({
      uid: "RCpu0bRhAAP8z9QOULS9taHvYSL2",
      email: "demouser@gmail.com",
      emailVerified: true,
      displayName: "Demonstration User",
      isAnonymous: false,
      photoURL:
        "https://lh3.googleusercontent.com/a/ACg8ocLpZXq8N_iy2xlcwVrYjouBcHiIXmjyS-1pU4CjSCyHcwtD=s96-c",
      createdAt: "1708318439897",
      lastLoginAt: "1708905100663",
    });
  };

  return (
    <AuthGoogleContext.Provider
      value={{ signInGoogle, user, logOut, setDemonstrationUser }}
    >
      {children}
    </AuthGoogleContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthGoogleContext);
};
