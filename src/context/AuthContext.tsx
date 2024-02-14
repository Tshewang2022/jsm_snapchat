import { create } from "domain";
import { useState, useContext, useEffect, createContext } from "react";
import { IContextType, IUser } from "@/types";

export const INITIAL_USER = {
  id: " ",
  username: " ",
  email: " ",
  imageUrl: " ",
  bio: " ",
};

export const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAunthenticated: () => {},
  checkAuthUser: async () => false as boolean,
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser>(INITIAL_USER);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAunthenticated] = useState(false);

  const value = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAunthenticated,
    checkAuthUser,
  };
  return <div>AuthContext</div>;
};

export default AuthContext;
