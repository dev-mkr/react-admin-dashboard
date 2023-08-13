import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

import { Calendar, ClipboardList, Home, LogOut, Menu } from "lucide-react";
import Logo from "@/components/Logo";

import { Button } from "@/components/ui/button";
import ToggleTheme from "@/components/ToggleTheme";
import useAuthStore from "@/store/useAuthStore";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "@/components/Footer";

const DashboardLayout = () => {
  const { logOut } = useAuthStore((state) => state.actions);
  const auth = useAuthStore((state) => state.auth);
  const { pathname } = useLocation();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handelToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!sidebarRef?.current?.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    }
    isSidebarOpen
      ? document.addEventListener("mousedown", handleClickOutside)
      : document.removeEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <>
      <header className="container sticky top-0 flex h-14 items-center justify-between bg-background">
        <Button
          variant="ghost"
          size="icon"
          onClick={handelToggleSidebar}
          title="open sidebar"
          className="lg:opacity-0"
        >
          <Menu />
        </Button>
        <span className="flex items-center gap-x-3">
          Welcome, {auth?.user.first_name} 👋
          <ToggleTheme />
        </span>
      </header>

      <aside
        className={cn(
          "fixed left-0 top-0 z-40 flex h-screen w-64 -translate-x-full flex-col gap-y-5 border-r bg-background p-4  transition-transform lg:translate-x-0",
          {
            "translate-x-0": isSidebarOpen,
          }
        )}
        aria-label="Sidebar"
        ref={sidebarRef}
      >
        <Logo />
        <nav className="flex flex-1 flex-col gap-y-1 ">
          <Link to="/">
            <Button
              variant={pathname === "/" ? "secondary" : "ghost"}
              className="w-full justify-start gap-x-3 text-base"
            >
              <Home />
              Overview
            </Button>
          </Link>
          {/* <Link to="/calender"> */}
          <Button
            variant={pathname === "/calender" ? "secondary" : "ghost"}
            className="w-full justify-start gap-x-3 text-base"
            disabled
          >
            <Calendar />
            Calendar - soon
          </Button>
          {/* </Link> */}
          {/* <Link to="/kanban-board"> */}
          <Button
            variant={pathname === "/kanban-board" ? "secondary" : "ghost"}
            className="w-full justify-start gap-x-3 text-base"
            disabled
          >
            <ClipboardList />
            Kanban Board - soon
          </Button>
          {/* </Link> */}
        </nav>
        <Button
          variant="ghost"
          onClick={logOut}
          className="justify-start gap-x-3 text-base"
        >
          <LogOut />
          Log Out
        </Button>
        <Footer className=" pb-0 md:text-xs" />
      </aside>

      <main className="p-4 lg:ml-64">
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
