import { Link } from "react-router-dom";

export default function Form5() {
  return (
    <div className="flex flex-col justify-center items-center h-screen  mad:ml-20 mad:pl-10 ml-[10rem] pl-5 pb-5 mad6:ml-[4.5rem] ">
      <img
        src="https://i.ibb.co/D84R9Qx/Avatar.png"
        className="h-[4rem] w-[4rem] mad5:h-[7rem] mad5:w-[7rem] mad6:h-[4rem] mad6:w-[4rem]"
      />
      <span className="text-white text-3xl mt-7 mad5:text-4xl mad6:text-2xl">
        Vertexia
      </span>
      <span className="text-[1rem] text-sg6 mt-2 mad5:text-xl mad6:text-xs">
        vertexia.artficium.app
      </span>
      <div className="mt-10">
        <span className="text-[1rem] mr-5 text-nb3/50 mad5:text-xl mad6:text-xs">
          Change workspace
        </span>
        <button className="px-3 py-2 bg-sg5 text-[1rem] rounded-lg mad5:px-5 mad5:text-xl mad5:py-4 mad6:text-[0.9rem]">
          <Link to="/create4">Join Now</Link>
        </button>
      </div>
      <div className="mt-10 flex flex-row">
        <img
          src="https://i.ibb.co/HTJBv0h/Users.png"
          className=" h-10 mad5:h-14"
        />
        <span className="text-[1rem] mt-3 ml-5 text-nb3/70 mad5:text-xl mad6:text-xs">
          and 873 others have already joined
        </span>
      </div>
    </div>
  );
}
