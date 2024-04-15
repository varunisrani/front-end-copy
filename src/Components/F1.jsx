import { Link } from "react-router-dom";

export default function F1() {
  return (
    <>
      <div className="mt-8 mad:flex mad:flex-col">
        <input
          type="text"
          placeholder="Email"
          className="bg-nb6 border border-gray-300 w-[25rem] px-2 py-2 rounded-md focus:outline-none focus:ring focus:ring-[#B6F09C] text-xs text-white"
        />
        <input
          type="text"
          placeholder="Password"
          className="bg-nb6 border border-gray-300 w-[25rem] px-2 py-2 rounded-md focus:outline-none focus:ring focus:ring-[#B6F09C] text-xs mt-3 text-white"
        />
      </div>
      <div className=" flex flex-row mt-8">
        <input type="checkbox" id="myCheckbox" name="myCheckbox " />
        <span className="text-xs text-nb3 ml-2">Remember me</span>
        <span className=" bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 bg-clip-text text-transparent text-xs ml-40 pl-10">
          Forgot Password?
        </span>
      </div>
      <div className="mt-5">
        {" "}
        <button className="bg-sg5 rounded-lg py-2 text-xs w-[25rem]">
          <Link to="/login1">Log in</Link>
        </button>
      </div>
    </>
  );
}
