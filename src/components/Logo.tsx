import { ReactComponent as BrandLogo } from "@/assets/icons/logo.svg";

const Logo = () => {
  return (
    <span className="flex select-none items-center gap-x-2">
      <BrandLogo className="w-10" />
      <span className="font-bold">react admin dashboard</span>
    </span>
  );
};

export default Logo;
