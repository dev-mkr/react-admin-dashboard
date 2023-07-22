import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button/button";
import ArrowRight from "@/assets/icons/ArrowRight";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { Checkbox } from "@/components/ui/checkbox";

const schema = yup.object().shape({
  email: yup.string().email().required("A valid email is required."),
  password: yup.string().required("Your password is required.").min(6),
});

type loginFormValues = {
  email: string;
  password: string;
};

const LOGIN_URL = "/auth/login";

function LoginForm() {
  const { setAuth } = useAuthStore((state) => state.actions);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<loginFormValues>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: loginFormValues) => {
    setIsLoading(true);
    try {
      const response = await axios.post(LOGIN_URL, values, {
        withCredentials: true,
      });
      setAuth(response?.data);
      setIsLoading(false);
      navigate(from, { replace: true });
    } catch (error) {
      const errorResponse = error as AxiosError<{ message: string }>;
      setError("root", {
        message: errorResponse?.response?.data?.message,
      });
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-5">
      {/* start email */}
      <div className="grid gap-y-2">
        <Label
          htmlFor="email"
          className={cn("", { "text-destructive": errors.email })}
        >
          Email
        </Label>
        <Input
          type="text"
          id="email"
          autoFocus
          placeholder="name@email.com"
          aria-invalid={!!errors.email}
          className={cn("", { "border-destructive": errors.email })}
          {...register("email")}
        />
        {errors.email && (
          <span role="alert" className={"text-sm text-destructive"}>
            {errors.email.message}
          </span>
        )}
      </div>
      {/* end email */}
      {/* start password */}
      <div className="grid gap-y-2">
        <Label
          htmlFor="password"
          className={cn("", { "text-destructive": errors.password })}
        >
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="Type your password"
          aria-invalid={!!errors.password}
          className={cn("", { "border-destructive": errors.password })}
          {...register("password")}
        />
        {errors.password && (
          <span role="alert" className={"text-sm text-destructive"}>
            {errors.password.message}
          </span>
        )}
      </div>
      {/* end password */}
      {/* start remember me */}
      <div className="flex items-end space-x-2">
        <Checkbox
          id="rememberMe"
          onCheckedChange={(e) =>
            localStorage.setItem("rememberMe", e.toString())
          }
        />
        <Label htmlFor="rememberMe" className="text-sm font-medium">
          Remember me
        </Label>
      </div>
      {/* end remember me */}
      {errors.root && (
        <span role="alert" className={"text-sm text-destructive"}>
          {errors.root.message}
        </span>
      )}
      <Button
        className="gap-x-2 bg-btn-gradient font-bold text-slate-900"
        disabled={isLoading}
      >
        Login to Your Account{" "}
        {isLoading ? <Loader2 className="animate-spin" /> : <ArrowRight />}
      </Button>
      <span className="text-muted-foreground">
        Don’t have an account yet?{" "}
        <Link to="/register" className="text- text-foreground">
          Register now!
        </Link>
      </span>
    </form>
  );
}

export default LoginForm;
