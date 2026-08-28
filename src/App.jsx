import { Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/01_Home";
import Owner from "./pages/02_Owner";
import UserSection from "./pages/03_UserSection";
import AdminSection from "./pages/04_AdminSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
        <h1 className="text-4xl">404 - Page Not Found 🧙‍♂️</h1>
        <Link to="/" className="btn">
        Back to Home
        </Link>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/owner", element: <Owner /> },
      { path: "/user", element: <UserSection /> },
      { path: "/admin", element: <AdminSection /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
