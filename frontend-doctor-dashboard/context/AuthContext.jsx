import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ PURE LOCAL STORAGE AUTH
    const storedDoctor = localStorage.getItem("doctor");
    const token = localStorage.getItem("token");

    if (storedDoctor && token) {
      setDoctor(JSON.parse(storedDoctor));
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ doctor, setDoctor, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
