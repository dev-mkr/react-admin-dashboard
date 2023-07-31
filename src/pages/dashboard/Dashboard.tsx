import DashboardLayout from "@/components/layout/DashboardLayout";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <main>
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    </main>
  );
};

export default Dashboard;
