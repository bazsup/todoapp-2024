import React, { useState } from "react";
import { fakeAuthProvider } from "../auth";

interface IAuthContext {
  username: string | null;
  isAuthenticated: boolean;
  signin: (_: string) => Promise<void>;
  signout: () => Promise<void>;
}

export const AuthContext = React.createContext<IAuthContext>({
  username: null,
  isAuthenticated: false,
  signin: async () => {},
  signout: async () => {},
});

interface IAuthInfo {
  username: string | null;
  isAuthenticated: boolean;
}

interface Props {
  children: JSX.Element;
}

function AuthProvider({ children }: Props) {
  const [authInfo, setAuthInfo] = useState<IAuthInfo>({
    username: null,
    isAuthenticated: false,
  });

  async function signin(username: string) {
    // call signin API
    await fakeAuthProvider.signin(username);

    setAuthInfo({
      username: fakeAuthProvider.username,
      isAuthenticated: fakeAuthProvider.isAuthenticated,
    });
  }
  async function signout() {
    // call signout API
    await fakeAuthProvider.signout();

    setAuthInfo({
      username: fakeAuthProvider.username,
      isAuthenticated: fakeAuthProvider.isAuthenticated,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        username: authInfo.username,
        isAuthenticated: authInfo.isAuthenticated,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
