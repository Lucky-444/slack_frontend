import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { signUpRequest } from "@/apis/auth";
export const useSignup = () => {
  const {
    isPending,
    isSuccess,
    error,
    mutate: signupMutation,
  } = useMutation({
    mutationFn: signUpRequest,
    onSuccess: (data) => {
      console.log("Signup successful:", data);
      // Handle successful signup, e.g., redirect or show a success message
    },
    onError: (error) => {
      console.error("Signup failed:", error);
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
