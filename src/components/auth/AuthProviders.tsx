import { Button } from "@/components/ui/button/button";
import { Google } from "@/assets/icons/Google";
import { GitHub } from "@/assets/icons/GitHub";
import { Facebook } from "@/assets/icons/Facebook";
type PropsType = {
  operationName: "Sign in" | "Sign up";
};

function AuthProviders(props: PropsType) {
  const OPERATION_NAME = props.operationName;
  const RenderButton = ({ children }: { children: React.ReactNode }) => {
    return (
      <Button variant="outline" title="SOON - under development">
        <span className="flex min-w-[10rem]">{children}</span>
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
        <Google className="mr-2 h-4 w-4" /> {OPERATION_NAME} with google
      </RenderButton>
      <RenderButton>
        <GitHub className="mr-2 h-4 w-4" /> {OPERATION_NAME} with Github
      </RenderButton>
      <RenderButton>
        <Facebook className="mr-2 h-4 w-4" /> {OPERATION_NAME} with Facebook
      </RenderButton>
    </section>
  );
}

export default AuthProviders;
