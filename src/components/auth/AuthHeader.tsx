import { ReactComponent as Logo } from "@/assets/icons/logo.svg";
import ToggleTheme from "../ToggleTheme";

//todo make it reusable
const AuthHeader = () => {
  return (
    <header className="container absolute top-2 flex items-center justify-between  sm:top-8">
      <span className="flex items-center gap-x-2">
        <Logo className="w-10" />
        <span className="font-bold">react admin dashboard</span>
      </span>
      <ToggleTheme />
    </header>
  );
};

export default AuthHeader;
