import { MkrLogo } from "@/assets/icons/MkrLogo";

const Footer = () => {
  return (
    <footer className="container flex justify-between  pb-5 text-sm text-muted-foreground  sm:text-base">
      <a href="#">Privacy Policy</a>
      <span className="flex items-center gap-x-3">
        Created with 💚 by
        <a
          href="https://dev-mkr.me"
          aria-label="visit the creator's personal portfolio"
          target="blank"
        >
          <MkrLogo className="-mb-1 w-5 text-foreground" />
        </a>
      </span>
    </footer>
  );
};

export default Footer;
