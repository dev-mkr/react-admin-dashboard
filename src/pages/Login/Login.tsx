import AuthLayout from "@/components/layout/AuthLayout";
import LoginForm from "./LoginForm/LoginForm";
import AuthProviders from "@/components/auth/AuthProviders";

const Login = () => {
  return (
    <AuthLayout headingText="Login to your account">
      <LoginForm />
      <AuthProviders operationName="Sign in" />
    </AuthLayout>
  );
};

export default Login;
