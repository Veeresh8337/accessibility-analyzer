
import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string) => {
    // In a real app, this would validate with a backend
    // For this demo, we'll simulate successful login with any valid input
    
    // Simple validation
    if (!email || !password) {
      throw new Error("Email and password are required");
    }
    
    // Create user object
    const user = {
      name: email.split('@')[0], // Use part of email as name
      email,
    };
    
    // Store user in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    
    // Update state
    setUser(user);
    setIsAuthenticated(true);
  };

  const signup = async (name: string, email: string, password: string) => {
    // In a real app, this would register with a backend
    // For this demo, we'll simulate successful signup
    
    // Simple validation
    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }
    
    // Create user object
    const user = { name, email };
    
    // Store user in localStorage
    localStorage.setItem("user", JSON.stringify(user));
    
    // Update state
    setUser(user);
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Remove user from localStorage
    localStorage.removeItem("user");
    
    // Update state
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
