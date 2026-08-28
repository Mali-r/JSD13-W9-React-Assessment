import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b-2 border-[gray] text-black font-semibold px-6 py-2 flex justify-end gap-6">
      <Link to="/">Home</Link>
      <Link to="/owner">Owner</Link>
    </nav>
  );
}