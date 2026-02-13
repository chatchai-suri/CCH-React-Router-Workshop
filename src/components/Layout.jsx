import { Outlet } from "react-router";
import Header from "./Header";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col items-center">
      <Header />
      <Navbar />
      <main className="w-full max-w-4xl flex flex-col items-center p-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
