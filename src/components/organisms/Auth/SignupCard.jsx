import { useState } from "react";
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const SignupCard = () => {
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>SignUp</CardTitle>
        <CardDescription>signup to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-7">
          <Input
            placeholder="Email"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, email: e.target.value })
            }
            value={signupForm.email}
            type="email"
            disabled={false}
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={signupForm.password}
            onChange={(e) =>
              setSignupForm({ ...signupForm, password: e.target.value })
            }
            disabled={false}
          />
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            value={signupForm.confirmPassword}
            onChange={(e) =>
              setSignupForm({ ...signupForm, confirmPassword: e.target.value })
            }
            disabled={false}
          />
          <Button
            type="submit"
            size = "lg"
            disabled = {false}
            className="w-full bg-[#5f3e5b] text-white hover:bg-[#4c2d4a] transition-colors duration-200"
          >
            Continue
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
