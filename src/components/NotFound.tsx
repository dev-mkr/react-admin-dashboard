import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const NotFound = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center font-semibold">
      <h1 className="flex items-center text-2xl">
        404 <span className=" mx-5 block h-8  border-r-2"></span> Page Not Found
      </h1>
      <Link to="/">
        <Button variant="link">Go back to home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
