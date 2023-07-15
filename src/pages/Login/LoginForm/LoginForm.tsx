import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ArrowRight from "@/assets/icons/ArrowRight";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  email: yup.string().email().required("A valid email is required."),
  password: yup.string().required("Your password is required.").min(6),
});

type FormValues = {
  email: string;
  password: string;
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // handle submitting the form
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
          <span
            role="alert"
            className={cn("text-sm", { "text-destructive": errors.email })}
          >
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
          <span
            role="alert"
            className={cn("text-sm", { "text-destructive": errors.password })}
          >
            {errors.password.message}
          </span>
        )}
      </div>
      {/* end password */}
      <Button className="gap-x-2 bg-btn-gradient font-bold text-slate-900">
        Login to Your Account <ArrowRight />
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
