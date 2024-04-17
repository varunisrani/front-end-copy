import { Link } from "react-router-dom";
import F1 from "../../F1";
import F2 from "../../F2";

// eslint-disable-next-line react/prop-types
export default function Form1() {
  return (
    <div className="loginform">
      <div className="flex flex-row">
        <span className="text-3xl font-thin text-white">Hello,</span>
        <span className="bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 text-transparent bg-clip-text text-3xl font-medium ml-1">
          Mikołaj!
        </span>
      </div>
      <span className="text-xs text-nb3 mt-5">
        Log in to Artificium to start creating magic.
      </span>

      <F2 />

      <div className="mt-5">
        <F1 />
      </div>
      <div className="flex flex-row mt-10 items-center justify-center">
        <span className="text-xl text-nb4">Don’t have an account?</span>
        <span className="text-xl ml-3 bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 bg-clip-text text-transparent">
          <Link to="/create1">Sign Up</Link>
        </span>
      </div>
    </div>
  );
}
