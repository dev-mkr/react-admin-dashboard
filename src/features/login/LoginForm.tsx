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
    <div className="container flex flex-col justify-around">
      <h1 className=" text-3xl">Login</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-3xl flex-col justify-center gap-y-5 "
      >
        {/* start email */}
        <div className="">
          <label
            htmlFor="email"
            className={`input-label ${errors.email && "text-red-500"}`}
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="name@email.com"
            aria-invalid={!!errors.email}
            className={`input ${errors.email && "border-red-400 text-red-300"}`}
            {...register("email")}
          />
          {errors.email && (
            <span role="alert" className="mt-1 text-sm text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>
        {/* end email */}
        {/* start password */}
        <div className="">
          <label
            htmlFor="password"
            className={`input-label ${errors.password && "text-red-500"}`}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Type your password"
            aria-invalid={!!errors.password}
            className={`input ${errors.password && "border-red-400 text-red-300"}`}
            {...register("password")}
          />
          {errors.password && (
            <span role="alert" className="mt-1 text-sm text-red-500">
              {errors.password.message}
            </span>
          )}
        </div>
        {/* end password */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
