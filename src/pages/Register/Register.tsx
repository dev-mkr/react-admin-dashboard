import AuthLayout from "@/components/layout/AuthLayout";
import RegisterForm from "./RegisterForm/RegisterForm";
import AuthProviders from "@/components/auth/AuthProviders";

const Register = () => {
  return (
    <AuthLayout headingText="create an account">
      <RegisterForm />
      <AuthProviders operationName="Sign up" />
    </AuthLayout>
  );
};

export default Register;
