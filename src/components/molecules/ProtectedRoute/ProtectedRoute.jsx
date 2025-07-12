import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/context/useAuth";
import { LucideLoader2 } from "lucide-react";
export const ProtectedRoute = ({ children }) => {
  const { auth } = useAuth();

        /**
         * if loading state becomes false
         * re-rendere the component
         * if user is not authenticated, redirect to signin page
         */


  
  if (auth.isLoading) {
    return <div>
        <LucideLoader2 className="w-6 h-6 animate-spin" />
        <span className="ml-2">Loading...</span>
    </div>;
  }

  if (!auth.user || !auth.token) {

    return <Navigate to="/auth/signin" />;
  }

  return children;
};
