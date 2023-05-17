import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
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

  function handelSubmit(data: FormValues) {
    // handle submitting the form
    console.log(data);
  }

  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(handelSubmit)}>
        <div className="mb-8">
          <label
            htmlFor="email"
            className={`mb-2   block text-sm font-medium  text-gray-900 dark:text-white ${
              errors.email ? "text-red-400" : "text-purple-400"
            }`}
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="name@email.com"
            className={`block w-full border-b-2 bg-transparent px-4 py-2 placeholder-purple-500  outline-none focus:bg-purple-600 ${
              errors.email
                ? "border-red-400 text-red-300"
                : "border-purple-400 text-purple-200"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-2 flex text-sm text-red-500 sm:block    ">
              A valid email is required.
            </p>
          )}
        </div>

        <div className="mb-8">
          <label
            htmlFor="password"
            className={`mb-2 block text-sm font-bold ${
              errors.password ? "text-red-400" : "text-purple-400"
            }`}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="superduperpassword"
            className={`block w-full border-b-2 bg-transparent px-4 py-2 text-purple-200 placeholder-purple-500 outline-none focus:bg-purple-600 ${
              errors.password ? "border-red-400" : "border-purple-400"
            }`}
            {...register("password")}
          />
          {errors.password && (
            <p className="mt-2 text-sm text-red-500">
              Your password is required.
            </p>
          )}
        </div>

        <button className="inline-block rounded bg-yellow-500 px-5 py-2 text-sm text-yellow-800 shadow">
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
