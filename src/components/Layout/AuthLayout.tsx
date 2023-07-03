import { Scratch } from "@/assets/icons/Scratch";
import Footer from "../Footer";
import AuthHeader from "../auth/AuthHeader";

type PropsType = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: PropsType) => {
  return (
    <main className=" relative flex h-screen max-h-screen flex-col justify-center gap-y-12 sm:gap-y-20">
      <AuthHeader />
      <h1 className="text-center text-3xl font-semibold tracking-tight sm:text-5xl">
        Login to your account
      </h1>

      <div className="container relative flex flex-wrap gap-x-16 gap-y-10 sm:flex-nowrap lg:gap-x-60 xl:px-48 [&>*]:w-full">
        <Scratch className="absolute left-0 top-1/3 max-sm:hidden" />
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default AuthLayout;
