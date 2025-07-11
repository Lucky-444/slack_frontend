import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { LucideLoader2, TriangleAlert } from "lucide-react";
import { FaCheck } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const SignupCard = ({
  signupForm,
  setSignupForm,
  validationErrors,
  onSignupFormSubmit,
  isPending,
  isSuccess,
  error,
}) => {
  const navigate = useNavigate();

  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>SignUp</CardTitle>
        <CardDescription>signup to access your account</CardDescription>

        {validationErrors && (
          <div className="bg-destructive/15 p-4 rounded-md items-center gap-x-2 text-destructive mb-6">
            <div>
              <TriangleAlert size={17} />
              <p>{validationErrors.message}</p>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
            <TriangleAlert className="size-5" />
            <p>{error.message}</p>
          </div>
        )}

        {isSuccess && (
          <div className="bg-primary/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-primary mb-5">
            <FaCheck className="size-5" />
            <p>
              Successfully signed up. You will be redirected to the login page
              in a few seconds.
              <LucideLoader2 className="animate-spin ml-2" />
            </p>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <form className="space-y-7" onSubmit={onSignupFormSubmit}>
          <Input
            placeholder="Email"
            required
            onChange={(e) =>
              setSignupForm({ ...signupForm, email: e.target.value })
            }
            value={signupForm.email}
            type="email"
            disabled={isPending}
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
            disabled={isPending}
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
            disabled={isPending}
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
            disabled={isPending}
          />
          <Button
            type="submit"
            size="lg"
            disabled={isPending}
            className="w-full"
          >
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
