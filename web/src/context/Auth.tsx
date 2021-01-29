import React, { createContext, useContext, useEffect, useState } from "react";

import api from "../services/api";

interface IUser {
  id: number | null;
  name: string | null;
  email: string | null;
  avatar: string | null;
  updated_at: Date | null;
}

interface IAuth {
  signed: boolean;
  user: IUser | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<any>;
  signOut(): Promise<any>;
}

const AuthContext = createContext<IAuth>({} as IAuth);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLocalStorage() {
      const localUser: IUser = JSON.parse(localStorage.getItem("@Auth:user") || '{}');
      const localToken = localStorage.getItem("@Auth:token");
      // // simular uma lentidão para mostar o loading.
      //await new Promise((resolve) => setTimeout(resolve, 1000));
      if (localStorage && localToken) {
        setUser(localUser);
        api.defaults.headers["Authorization"] = `Bearer ${localToken}`;
      }
      setLoading(false);
    }
    loadLocalStorage();
  }, []);

  async function signIn(email: string, password: string) {
    setLoading(true);
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    const { user, token } = response.data;

    setUser(user);

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    localStorage.setItem("@Auth:user", JSON.stringify(user));
    localStorage.setItem("@Auth:token", token);

    setLoading(false);
  }
  async function signOut() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
