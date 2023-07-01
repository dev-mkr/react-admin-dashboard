import authImg from "@/assets/authLayout.jpg";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <main className="flex max-h-screen">
      {children}
      <div className="w-full">
        <img src={authImg} className="max-h-full w-full object-cover" />
      </div>
    </main>
  );
};

export default AuthLayout;
