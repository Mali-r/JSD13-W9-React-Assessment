import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b-2 border-[gray] text-black font-semibold px-6 py-2 flex justify-end gap-2">
      <Link to="/" className="btn btn-xs btn-ghost">Home</Link>
      <Link to="/owner" className="btn btn-xs btn-ghost">Owner</Link>
    </nav>
  );
}