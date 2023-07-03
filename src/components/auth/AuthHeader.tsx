import { Logo } from "@/assets/icons/Logo";

//todo make it reusable
const AuthHeader = () => {
  return (
    <header className="container absolute top-2 flex items-center gap-x-2 sm:top-8">
      <Logo />
    </header>
  );
};

export default AuthHeader;
