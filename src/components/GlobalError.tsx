import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const GlobalError = ({
  className,
  children,
}: {
  className: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex-1 rounded-lg border border-destructive text-destructive shadow-sm",
        className
      )}
      role="alert"
    >
      {children || (
        <div className="grid h-full place-items-center">
          <h1 className="text-xl font-semibold">Something went wrong</h1>
          <Button
            variant="destructive"
            onClick={() => window.location.reload()}
          >
            Reload the page
          </Button>
        </div>
      )}
    </div>
  );
};

export default GlobalError;
