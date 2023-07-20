import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button/button";
import ArrowRight from "@/assets/icons/ArrowRight";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "@/store/useAuthStore";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { Loader2 } from "lucide-react";

const schema = yup.object().shape({
  first_name: yup.string().required("Your first name is required."),
  last_name: yup.string().required("Your last name is required."),
  email: yup.string().email().required("A valid email is required."),
  password: yup.string().required("Your password is required.").min(6),
  password_confirm: yup
    .string()
    .required("Please confirm your password.")
    .oneOf([yup.ref("password")], "Passwords must match."),
});

type registerFormValues = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const REGISTER_URL = "/auth/register";

function RegisterForm() {
  const { setAuth } = useAuthStore((state) => state.actions);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<registerFormValues>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values: registerFormValues) => {
    setIsLoading(true);
    try {
      const response = await axios.post(REGISTER_URL, values, {
        withCredentials: true,
      });
      setAuth(response?.data);
      setIsLoading(false);
      navigate("/", { replace: true });
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
      {/* start first name */}
      <div className="grid gap-y-2">
        <Label
          htmlFor="first_name"
          className={cn("", { "text-destructive": errors.first_name })}
        >
          First Name
        </Label>
        <Input
          type="text"
          id="first_name"
          autoFocus
          aria-invalid={!!errors.first_name}
          className={cn("", { "border-destructive": errors.first_name })}
          {...register("first_name")}
        />
        {errors.first_name && (
          <span role="alert" className={"text-sm text-destructive"}>
            {errors.first_name.message}
          </span>
        )}
      </div>
      {/* end first name */}
      {/* start last name */}
      <div className="grid gap-y-2">
        <Label
          htmlFor="last_name"
          className={cn("", { "text-destructive": errors.last_name })}
        >
          Last Name
        </Label>
        <Input
          type="text"
          id="last_name"
          aria-invalid={!!errors.last_name}
          className={cn("", { "border-destructive": errors.last_name })}
          {...register("last_name")}
        />
        {errors.last_name && (
          <span role="alert" className={"text-sm text-destructive"}>
            {errors.last_name.message}
          </span>
        )}
      </div>
      {/* end last name */}
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
      {/* start password confirm */}
      <div className="grid gap-y-2">
        <Label
          htmlFor="password_confirm"
          className={cn("", { "text-destructive": errors.password_confirm })}
        >
          Confirm Password
        </Label>
        <Input
          type="password"
          id="password_confirm"
          placeholder="Confirm your password"
          aria-invalid={!!errors.password_confirm}
          className={cn("", {
            "border-destructive": errors.password_confirm,
          })}
          {...register("password_confirm")}
        />
        {errors.password_confirm && (
          <span role="alert" className={"text-sm text-destructive"}>
            {errors.password_confirm.message}
          </span>
        )}
      </div>
      {/* end password confirm */}
      {errors.root && (
        <span role="alert" className={"text-sm text-destructive"}>
          {errors.root.message}
        </span>
      )}
      <Button
        className="gap-x-2 bg-btn-gradient font-bold text-slate-900"
        disabled={isLoading}
      >
        Create Your Account{" "}
        {isLoading ? <Loader2 className="animate-spin" /> : <ArrowRight />}
      </Button>{" "}
      <span className="text-muted-foreground">
        have an account yet?{" "}
        <Link to="/login" className="text- text-foreground">
          Login now!
        </Link>
      </span>
    </form>
  );
}

export default RegisterForm;
