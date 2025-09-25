// src/context/AuthContext.tsx
import React, { createContext, useContext, useState } from "react";

export type UserRole = "patient" | "individual-therapist" | "terapeuta" | "centro" | "administrador";

interface User {
  id: string;
  role: UserRole;
  name: string;
  email: string;
  password: string;
  dashboardRoute: string;
}

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

// Usuarios predefinidos
const PREDEFINED_USERS: User[] = [
  {
    id: "1",
    role: "patient",
    name: "Paciente Demo",
    email: "paciente@demo.com",
    password: "paciente123",
    dashboardRoute: "/patient-dashboard"
  },
  {
    id: "2",
    role: "individual-therapist",
    name: "Acupunturista Individual",
    email: "acupunturista@demo.com",
    password: "acupunturista123",
    dashboardRoute: "/therapist-dashboard"
  },
  {
    id: "3",
    role: "terapeuta",
    name: "Terapeuta Demo",
    email: "terapeuta@demo.com",
    password: "terapeuta123",
    dashboardRoute: "/terapeuta-dashboard"
  },
  {
    id: "4",
    role: "centro",
    name: "Centro Médico Demo",
    email: "centro@demo.com",
    password: "centro123",
    dashboardRoute: "/centro-dashboard"
  },
  {
    id: "5",
    role: "administrador",
    name: "Administrador",
    email: "admin@demo.com",
    password: "admin123",
    dashboardRoute: "/admin-dashboard"
  }
];

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simular validación de credenciales
    const foundUser = PREDEFINED_USERS.find(
      u => u.email === email && u.password === password
    );
    
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

// Exportar usuarios para referencia
export { PREDEFINED_USERS };
