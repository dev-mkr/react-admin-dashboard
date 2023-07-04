import { Scratch } from "@/assets/icons/Scratch";
import Footer from "../Footer";
import AuthHeader from "../auth/AuthHeader";

type PropsType = {
  children: React.ReactNode;
  headingText: string;
};

const AuthLayout = ({ children, headingText }: PropsType) => {
  return (
    <main className=" relative flex min-h-screen  flex-col gap-y-10   sm:justify-evenly lg:gap-y-16">
      <AuthHeader />
      <h1 className="pt-12 text-center text-3xl font-semibold tracking-tight sm:text-5xl sm:max-lg:pt-20">
        {headingText}
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
