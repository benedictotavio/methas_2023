import { createContext } from "react";
import { ReactNode } from "react";

import useAuth, { UserData } from "../hooks/useAuth";


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
  }) => Promise<void>
}

type IUserContextProvider = {
  children?: ReactNode
}

const Context = createContext({} as IContext);

function UserProvider({ children }: IUserContextProvider) {

  const { authenticated, loading, register, login, logout, verifyUser, verifyEmail, verifyEmailCode } = useAuth();

  return (
    <Context.Provider value={{ loading, authenticated, register, login, logout, verifyUser, verifyEmail, verifyEmailCode }}>
      {children}
    </Context.Provider>
  );
}

export { Context, UserProvider };
