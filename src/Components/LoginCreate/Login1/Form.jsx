import F1 from "../../F1";
import F2 from "../../F2";

// eslint-disable-next-line react/prop-types
export default function Form() {
  return (
    <div className="loginform">
      <div className="flex flex-row">
        <span className="text-xl font-thin text-white">Let's get</span>
        <span className="bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 text-transparent bg-clip-text text-xl font-medium ml-1">
          creative!
        </span>
      </div>
      <span className="text-xs text-nb3 mt-2">
        Log in to Artificium to start creating magic.
      </span>
      <div className="mt-2">
        <F1 />
      </div>
      <F2 />
      <div className="flex flex-row mt-5">
        <span className="text-xs text-nb4">Don’t have an account?</span>
        <span className="text-xs ml-3 bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 bg-clip-text text-transparent">
          Sign Up
        </span>
      </div>
    </div>
  );
}
