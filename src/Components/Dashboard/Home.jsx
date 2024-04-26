import { useContext } from "react";
import Mainpart3 from "./Mainpart3";
import Slidebar from "./Slidebar/Slidebar";
import Authapi from "../../Authapi";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const authApi = useContext(Authapi);
  const navigate = useNavigate();
  const handleSignout = () => {
    authApi.setAuth(false);
    navigate("/login");
  };

  return (
    <div className="dashhome">
      {authApi.auth ? (
        <>
          <button onClick={handleSignout} className="text-white">
            Logout
          </button>
          <Slidebar />
          <Mainpart3 />
        </>
      ) : (
        <>
          <button className="text-white text-5xl">
            <Link to="/login">Login</Link>
          </button>
        </>
      )}
    </div>
  );
}
