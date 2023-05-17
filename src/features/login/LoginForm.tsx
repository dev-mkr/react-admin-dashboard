import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // handle submitting the form
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="name@email.com"
            aria-invalid={!!errors.email}
            className={`input relative ${
              errors.email && "border-red-400 text-red-300"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <span role="alert" className="absolute mt-1 text-sm text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="mb-8">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Type your password"
            aria-invalid={!!errors.password}
            className={`input relative ${
              errors.password && "border-red-400 text-red-300"
            }`}
            {...register("password")}
          />
          {errors.password && (
            <span role="alert" className="absolute mt-1 text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
