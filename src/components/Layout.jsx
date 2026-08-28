import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/01_Home";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}