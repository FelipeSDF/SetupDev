import { createContext } from 'react';
import { type UserModel } from '../models/UserModel';

export interface AuthContextType {
  user: UserModel | null;
  login: (userData: UserModel) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);