import { Link } from "react-router-dom";
import F2 from "../../F2";
import Login11 from "./Login11";

// eslint-disable-next-line react/prop-types
export default function Form() {
  return (
    <div className="loginform">
      <div className="flex flex-row">
        <span className="text-3xl mad5:text-4xl font-thin text-white mad6:text-2xl">
          Let's get
        </span>
        <span className="bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 text-transparent bg-clip-text text-3xl font-medium ml-1 mad5:ml-2 mad5:text-4xl mad6:text-2xl">
          creative!
        </span>
      </div>
      <span className="text-xs text-nb3 mt-4 mad5:text-xl">
        Log in to Artificium to start creating magic.
      </span>
      <div className="mt-2">
        <Login11 />
      </div>
      <div className="mad5:ml-[2.7rem]">
        <F2 />
      </div>
      <div className="flex flex-row mt-5 absolute bottom-0 left-0 ml-8 mb-8">
        <span className="text-xl text-nb4">Don’t have an account?</span>
        <span className="text-xl ml-3 bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 bg-clip-text text-transparent">
          <Link to="/create1">Sign Up</Link>
        </span>
      </div>
    </div>
  );
}
