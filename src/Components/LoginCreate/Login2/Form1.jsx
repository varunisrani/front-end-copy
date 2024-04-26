import { Link } from "react-router-dom";
import F2 from "../../F2";
import Login11 from "../Login1/Login11";

// eslint-disable-next-line react/prop-types
export default function Form1() {
  return (
    <div className="loginform">
      <div className="flex flex-row">
        <span className="text-3xl font-thin text-white mad5:text-4xl mad6:text-2xl">
          Hello,
        </span>
        <span className="bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 text-transparent bg-clip-text text-3xl font-medium ml-1 mad5:text-4xl mad6:text-2xl">
          Mikołaj!
        </span>
      </div>
      <span className="text-xs text-nb3 mt-5">
        Log in to Artificium to start creating magic.
      </span>

      <div className="mad5:ml-[3.2rem]">
        <F2 />
      </div>

      <div className="mt-5">
        <Login11 />
      </div>
      <div className="flex flex-row mt-10 items-center justify-center">
        <span className="text-xl text-nb4 ">Don’t have an account?</span>
        <span className="text-xl ml-3 bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 bg-clip-text text-transparent">
          <Link to="/create1">Sign Up</Link>
        </span>
      </div>
    </div>
  );
}
