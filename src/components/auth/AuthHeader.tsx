import Logo from "../Logo";
import ToggleTheme from "../ToggleTheme";

const AuthHeader = () => {
  return (
    <header className="container absolute top-2 flex items-center justify-between  sm:top-8">
      <Logo />
      <ToggleTheme />
    </header>
  );
};

export default AuthHeader;
