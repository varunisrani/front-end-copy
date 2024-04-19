import { Link } from "react-router-dom";

export default function F1() {
  return (
    <>
      <div className="mt-8 mad:flex mad:flex-col flex flex-col">
        <input
          type="text"
          placeholder="Email"
          className="bg-nb6 border border-gray-300/20 w-[30rem] px-4 py-2 mad5:w-[35rem]  mad5:py-4  mad6:w-[25rem] mad6:text-[1rem] rounded-md focus:outline-none focus:ring focus:ring-[#B6F09C] text-xl text-white"
        />
        <input
          type="text"
          placeholder="Password"
          className="bg-nb6 border border-gray-300/20 w-[30rem] px-4 py-2 mad5:w-[35rem] mad5:py-4 mad6:w-[25rem] mad6:text-[1rem] rounded-md focus:outline-none focus:ring focus:ring-[#B6F09C] text-xl mt-3 text-white"
        />
      </div>
      <div className=" flex flex-row mt-10">
        <input type="checkbox" id="myCheckbox" name="myCheckbox " />
        <span className="text-xs text-nb3 ml-2 mad5:text-xl ">Remember me</span>
        <span className=" bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 bg-clip-text text-transparent text-xs ml-60 pl-8 mad5:text-xl mad5:ml-[14rem] mad6:ml-[10rem]">
          Forgot Password?
        </span>
      </div>
      <div className="mt-5">
        {" "}
        <button className="bg-sg5 rounded-lg py-2 text-xl w-[30rem] mt-5 mad5:w-[35rem] mad5:py-3 mad6:w-[25rem] mad6:py-1 mad6:text-[1rem]">
          <Link to="/login1">Log in</Link>
        </button>
      </div>
    </>
  );
}
