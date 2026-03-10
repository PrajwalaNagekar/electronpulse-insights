import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '@/types';
import { mockUsers } from '@/data/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (phone: string, otp: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('ei_user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = async (phone: string, _otp: string): Promise<boolean> => {
    // Mock: any 6-digit OTP works
    await new Promise(r => setTimeout(r, 1000));
    const mockUser = phone.includes('876') ? mockUsers.supervisor1 : mockUsers.volunteer1;
    setUser(mockUser);
    localStorage.setItem('ei_user', JSON.stringify(mockUser));
    localStorage.setItem('ei_token', 'mock_jwt_token_' + Date.now());
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ei_user');
    localStorage.removeItem('ei_token');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
