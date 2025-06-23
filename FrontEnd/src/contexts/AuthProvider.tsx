import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import type { AuthContextType } from './AuthContext';
import type { UserModel } from '../models/UserModel';

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserModel | null>(null);

  const login = (userData: UserModel) => setUser(userData);
  const logout = () => setUser(null);

  const contextValue: AuthContextType = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}
