import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const { doctor, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !doctor) {
      router.replace("/signin");
    }
  }, [doctor, loading]);

  if (loading) return null;
  return children;
}
