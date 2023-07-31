import { useEffect, useState, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

import { Calendar, ClipboardList, Home, LogOut, Menu } from "lucide-react";
import Logo from "@/components/Logo";

import { Button } from "@/components/ui/button";
import ToggleTheme from "@/components/ToggleTheme";
import useAuthStore from "@/store/useAuthStore";
import { Link, useLocation } from "react-router-dom";
import Footer from "@/components/Footer";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
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
        <Footer className="flex-wrap-reverse justify-center pb-0" />
      </aside>

      <main className="p-4 lg:ml-64">
        {children}
        {/* <div className="rounded-lg border-2 border-dashed border-gray-200 p-4 dark:border-gray-700">
          <div className="mb-4 grid grid-cols-3 gap-4">
            <div className="flex h-24 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex h-24 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex h-24 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
          <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">
              <svg
                className="h-3.5 w-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </p>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div className="flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
            <div className="flex h-28 items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
};

export default DashboardLayout;
