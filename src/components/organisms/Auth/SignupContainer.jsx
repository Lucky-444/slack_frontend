import { useState } from "react";
import { SignupCard } from "./SignupCard";
import { useSignup } from "../../../hooks/apis/auth/useSignup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const SignupContainer = () => {
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  const { isPending, isSuccess, error, signupMutation } = useSignup();

  //form handling manually
  const [validationErrors, setValidationErrors] = useState(null);

  async function onSignupFormSubmit(e) {
    e.preventDefault();
    // Handle form submission logic here, e.g., call signup API
    console.log("Signup form submitted:", signupForm);
    // You can use a mutation hook to handle the signup process
    if (!signupForm.email || !signupForm.password || !signupForm.username) {
      console.error("All fields are required");
      setValidationErrors({ message: "All fields are required" });
      return;
    }
    if (signupForm.password !== signupForm.confirmPassword) {
      console.error("Passwords do not match");
      setValidationErrors({ message: "Passwords do not match" });
      return;
    }
    //if no error there then setValidationErrors to null
    setValidationErrors(null);

    await signupMutation({
      email: signupForm.email,
      password: signupForm.password,
      username: signupForm.username,
    });
  }

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        navigate("/auth/signin");
      }, 2000);
    }
  }, [isSuccess, navigate]);

  return (
    <SignupCard
      isPending={isPending}
      isSuccess={isSuccess}
      error={error}
      signupForm={signupForm}
      setSignupForm={setSignupForm}
      validationErrors={validationErrors}
      onSignupFormSubmit={onSignupFormSubmit}
    />
  );
};
