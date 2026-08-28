import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">
        Generation Thailand
        <br />
        <span>React-Assessment</span>
      </h1>
      <div className="flex gap-6">
        <button onClick={() => navigate("/user")} className="btn">
          User Home Section
        </button>
        <Link to="/admin" className="btn">
          Admin Home Section
        </Link>
      </div>
    </div>
  );
}
