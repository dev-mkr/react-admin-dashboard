import { cn } from "@/lib/utils";

const GlobalSkeleton = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "flex-1 animate-pulse rounded-lg border bg-secondary shadow-sm",
        className
      )}
    />
  );
};

export default GlobalSkeleton;
