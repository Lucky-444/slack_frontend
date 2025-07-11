import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const SignupCard = () => {
  const navigate = useNavigate();

  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
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
            type="text"
            name="username"
            placeholder="username"
            required
            value={signupForm.username}
            onChange={(e) =>
              setSignupForm({ ...signupForm, username: e.target.value })
            }
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
          <Button type="submit" size="lg" disabled={false} className="w-full">
            Continue
          </Button>
        </form>

        <Separator className="my-4" />

        <p className="text-center text-sm text-muted-foreground mt-4">
          Already have an account?{" "}
          <span
            className="text-sky-600 hover:underline cursor-pointer"
            onClick={() => navigate("/auth/signin")}
          >
            Sign In
          </span>
        </p>
      </CardContent>
    </Card>
  );
};
