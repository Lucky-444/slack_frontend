import { useMutation } from "@tanstack/react-query";

import { signUpRequest } from "@/apis/auth";
import { useToast } from "@/hooks/use-toast";
export const useSignup = () => {
  const { toast } = useToast();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signupMutation,
  } = useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data) => {
      console.log("Signup successful:", data);
      toast({
        title: "Signup successful",
        description: "You have successfully signed up!",
        type: "success",
      });
      // Handle successful signup, e.g., redirect or show a success message
    },
    onError: (error) => {
      console.error("Signup failed:", error);
      toast({
        title: "Signup failed",
        description: error.message,
        type: "error",
        variant : "destructive",
      });
      // Handle error, e.g., show an error message
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    signupMutation,
  };
};
