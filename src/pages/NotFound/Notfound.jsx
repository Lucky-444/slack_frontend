import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-lg text-gray-600">Page Not Found</p>
        <p className="mt-2 text-sm text-gray-500">
          The page you are looking for does not exist.
        </p>
        <Button className="mt-4" variant="outline" onClick={() => navigate(-1)}>
          Go to Sign In
        </Button>
      </div>
    </div>
  );
};
