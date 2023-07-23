import { ReactComponent as Logo } from "@/assets/icons/logo.svg";

//todo make it reusable
const AuthHeader = () => {
  return (
    <header className="container absolute top-2 flex items-center gap-x-2 sm:top-8">
      <Logo className="w-10" />
      <span className="font-bold">react admin dashboard</span>
    </header>
  );
};

export default AuthHeader;
