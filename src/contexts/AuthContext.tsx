import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, SignUpRequest } from '@/types';
import { mockUsers } from '@/data/mockData';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (phone: string, otp: string) => Promise<boolean>;
  loginWithEmail: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (data: Omit<SignUpRequest, 'accountStatus' | 'submittedAt'>) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('ei_user');
    return stored ? JSON.parse(stored) : null;
  });

  const login = async (phone: string, _otp: string): Promise<boolean> => {
    await new Promise(r => setTimeout(r, 1000));
    const mockUser = phone.includes('876') ? mockUsers.supervisor1 : mockUsers.volunteer1;
    if (mockUser.accountStatus !== 'approved') return false;
    setUser(mockUser);
    localStorage.setItem('ei_user', JSON.stringify(mockUser));
    localStorage.setItem('ei_token', 'mock_jwt_token_' + Date.now());
    return true;
  };

  const loginWithEmail = async (email: string, _password: string): Promise<{ success: boolean; error?: string }> => {
    await new Promise(r => setTimeout(r, 1000));
    const matchedUser = Object.values(mockUsers).find(u => u.email === email);
    if (!matchedUser) return { success: false, error: 'accountNotApproved' };
    if (matchedUser.accountStatus !== 'approved') return { success: false, error: 'accountNotApproved' };
    setUser(matchedUser);
    localStorage.setItem('ei_user', JSON.stringify(matchedUser));
    localStorage.setItem('ei_token', 'mock_jwt_token_' + Date.now());
    return { success: true };
  };

  const signup = async (data: Omit<SignUpRequest, 'accountStatus' | 'submittedAt'>): Promise<boolean> => {
    await new Promise(r => setTimeout(r, 1500));
    const request: SignUpRequest = {
      ...data,
      accountStatus: 'pending',
      submittedAt: new Date().toISOString(),
    };
    // Store in localStorage for mock
    const existing = JSON.parse(localStorage.getItem('ei_signups') || '[]');
    existing.push(request);
    localStorage.setItem('ei_signups', JSON.stringify(existing));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ei_user');
    localStorage.removeItem('ei_token');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, loginWithEmail, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
