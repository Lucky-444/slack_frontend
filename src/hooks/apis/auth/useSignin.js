import { useMutation } from "@tanstack/react-query";

import { signInRequest } from "@/apis/auth";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/context/useAuth";

export const useSignin = () => {
  const { toast } = useToast();
  const { setAuth } = useAuth();
  const {
    isPending,
    isSuccess,
    error,
    mutateAsync: signinMutation,
  } = useMutation({
    mutationFn: signInRequest,
    onSuccess: (data) => {
      console.log("Scuccessfully signed in", data);
      //now store the token in localStorage or cookies
      //you can use sessionStorage or cookies as well
      // For this example, we will use localStorage
      // Store the token in localStorage
      // why LocalStorage? It persists even after the browser is closed
      // and is accessible across tabs
      //we store it in string format

      /**
       * now we uodate our isLoading state of the context also
       * so
       */
      

      const token = JSON.stringify(data.data);
      localStorage.setItem("user", token);
      localStorage.setItem("token", data.data.token);
      // Optionally redirect to home page or another route

      setAuth({
        token: data.data.token,
        user: data.data,
        loading: false,
      });

      toast({
        title: "Successfully signed in",
        message: "You will be redirected to the home page in a few seconds",
        type: "success",
      });
    },
    onError: (error) => {
      console.error("Failed to sign in", error);
      toast({
        title: "Failed to sign in",
        message: error.message,
        type: "error",
        variant: "destructive",
      });
    },
  });

  return {
    isPending,
    isSuccess,
    error,
    signinMutation,
  };
};
