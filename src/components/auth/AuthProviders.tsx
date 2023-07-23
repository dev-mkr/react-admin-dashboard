import { Button } from "@/components/ui/button/button";
import { ReactComponent as Google } from "@/assets/icons/google.svg";
import { ReactComponent as GitHub } from "@/assets/icons/github.svg";
import { ReactComponent as Facebook } from "@/assets/icons/facebook.svg";

type PropsType = {
  operationName: "Sign in" | "Sign up";
};

function AuthProviders(props: PropsType) {
  const OPERATION_NAME = props.operationName;
  const RenderButton = ({ children }: { children: React.ReactNode }) => {
    return (
      <Button
        variant="outline"
        className="relative justify-start"
        title="SOON - under development"
      >
        <span className="absolute left-1/2 flex w-[70%] translate-x-[-50%] gap-x-4 md:w-[40%]">
          {children}
        </span>
      </Button>
    );
  };

  return (
    <section className="flex flex-col  gap-y-5 ">
      <div className="relative border-t text-xs">
        <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  bg-background px-2 uppercase text-muted-foreground">
          Or continue with
        </span>
      </div>
      <RenderButton>
        <Google className="w-5" />
        {OPERATION_NAME} with google
      </RenderButton>
      <RenderButton>
        <GitHub className="w-5" />
        {OPERATION_NAME} with Github
      </RenderButton>
      <RenderButton>
        <Facebook className="w-5" />
        {OPERATION_NAME} with Facebook
      </RenderButton>
    </section>
  );
}

export default AuthProviders;
