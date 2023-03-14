import { createContext } from "react";
import { ReactNode } from "react";

import useAuth from "../hooks/useAuth";


export interface IContext {
  loading: boolean,
  authenticated: boolean,
  register: (user: {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    passwordConfirmation: string
  }) => Promise<void>,
  login: (user: {
    email: string,
    password: string
  }) => Promise<void>,
  logout: () => void,
  verifyUser: (user: { id?: string, verifyCode: string }) => Promise<void>,
  verifyEmail: (user: {
    email: string;
  }) => Promise<void>,
  verifyEmailCode: (user: {
    password: string;
    confirmPassword: string;
  }, endpoint: {
    id?: string | undefined;
    verifyCode: string;
  }) => Promise<void>,
  getUser: () => Promise<any>
}

type IUserContextProvider = {
  children?: ReactNode
}

const Context = createContext({} as IContext);

function UserProvider({ children }: IUserContextProvider) {

  const { authenticated, loading, register, login, logout, verifyUser, verifyEmail, verifyEmailCode, getUser } = useAuth();

  return (
    <Context.Provider value={{ loading, authenticated, register, login, logout, verifyUser, verifyEmail, verifyEmailCode, getUser }}>
      {children}
    </Context.Provider>
  );
}

export { Context, UserProvider };
