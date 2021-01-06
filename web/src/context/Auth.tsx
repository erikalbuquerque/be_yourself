import React, { createContext, useContext, useEffect, useState } from "react";

import api from "../services/api";

interface IAuth {
  signIn(email: string, password: string): Promise<any>;
  signOut(): Promise<any>;
  user: Object;
}

const AuthContext = createContext<IAuth>({} as IAuth);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<Object | null>(null);

  useEffect(() => {
    async function loadLocalStorage() {
      const localUser = localStorage.getItem("@Auth:user");
      const localToken = localStorage.getItem("@Auth:token");

      if (localStorage && localToken) {
        setUser(localUser);
      }
    }
    loadLocalStorage();
  }, []);

  async function signIn(email: string, password: string) {
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    const { user, token } = response.data;

    setUser(user);

    api.defaults.headers["Authorization"] = `Bear ${token}`;

    localStorage.setItem("@Auth:user", JSON.stringify(user));
    localStorage.setItem("@Auth:token", token);
  }
  async function signOut() {}

  return (
    <AuthContext.Provider
      value={{
        user: !!user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
