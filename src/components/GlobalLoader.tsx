import { Loader2 } from "lucide-react";
import { createPortal } from "react-dom";

const GlobalLoader = () => {
  return createPortal(
    <div
      className="absolute inset-0 flex items-center justify-center opacity-90"
      role="status"
    >
      <Loader2 className="animate-spin" />
      <span className="ml-2 text-lg">Loading...</span>
    </div>,
    document.body
  );
};

export default GlobalLoader;
