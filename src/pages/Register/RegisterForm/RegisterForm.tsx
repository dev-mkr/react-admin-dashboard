import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  first_name: yup.string().required("Your first name is required."),
  last_name: yup.string().required("Your last name is required."),
  username: yup.string().required("username is required."),
  email: yup.string().email().required("A valid email is required."),
  password: yup.string().required("Your password is required.").min(6),
  password_confirm: yup
    .string()
    .required("Please confirm your password.")
    .oneOf([yup.ref("password")], "Passwords must match."),
});

type FormValues = {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  password_confirm: string;
};

function RegisterForm() {
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
        {/* start first name */}
        <div className="mb-8">
          <label htmlFor="first_name" className="input-label">
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            aria-invalid={!!errors.first_name}
            className={`input relative ${
              errors.first_name && "border-red-400 text-red-300"
            }`}
            {...register("first_name")}
          />
          {errors.first_name && (
            <span role="alert" className="absolute mt-1 text-sm text-red-500">
              {errors.first_name.message}
            </span>
          )}
        </div>
        {/* end first name */}
        {/* start last name */}
        <div className="mb-8">
          <label htmlFor="last_name" className="input-label">
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            aria-invalid={!!errors.last_name}
            className={`input relative ${
              errors.last_name && "border-red-400 text-red-300"
            }`}
            {...register("last_name")}
          />
          {errors.last_name && (
            <span role="alert" className="absolute mt-1 text-sm text-red-500">
              {errors.last_name.message}
            </span>
          )}
        </div>
        {/* end last name */}
        {/* start username */}
        <div className="mb-8">
          <label htmlFor="username" className="input-label">
            username
          </label>
          <input
            type="text"
            id="username"
            aria-invalid={!!errors.username}
            className={`input relative ${
              errors.username && "border-red-400 text-red-300"
            }`}
            {...register("username")}
          />
          {errors.username && (
            <span role="alert" className="absolute mt-1 text-sm text-red-500">
              {errors.username.message}
            </span>
          )}
        </div>
        {/* end username */}
        {/* start email */}
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
        {/* end email */}
        {/* start password */}
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
        {/* end password */}
        {/* start password confirm */}
        <div className="mb-8">
          <label htmlFor="password_confirm" className="input-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="password_confirm"
            placeholder="Confirm your password"
            aria-invalid={!!errors.password_confirm}
            className={`input relative ${
              errors.password_confirm && "border-red-400 text-red-300"
            }`}
            {...register("password_confirm")}
          />
          {errors.password_confirm && (
            <span role="alert" className="absolute mt-1 text-sm text-red-500">
              {errors.password_confirm.message}
            </span>
          )}
        </div>
        {/* end password confirm */}

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
