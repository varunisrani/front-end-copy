import { Link } from "react-router-dom";

export default function Form4() {
  return (
    <div className="Form">
      <div>
        <img
          src="https://i.ibb.co/HTJBv0h/Users.png"
          className="ml-40 pl-5 mt-10 h-10"
        />
      </div>
      <div className="flex flex-col ml-20 pl-10 mt-10 ">
        <span className="text-2xl font-thin text-white">
          Sophia, Kamil, Emily and 2,012
        </span>
        <span className="text-2xl font-thin text-white">
          others are already here!
        </span>
      </div>
      <div className="flex flex-col ml-20 pl-10 mt-3 text-nb3">
        <span className="text-xs font-thin  ">
          But... it looks like you don't have access
        </span>

        <span className="text-xs font-thin ">to this workspace.</span>
      </div>
      <div className="ml-20 pl-12 mt-10">
        {" "}
        <button className="w-[8rem] bg-sg5 text-xs rounded-lg ml-10 py-2 ">
          <Link to="/create4">Access request</Link>
        </button>
      </div>
      <div className="ml-40 mt-5">
        {" "}
        <button className="regback">Back</button>
      </div>
    </div>
  );
}
