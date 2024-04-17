import { Link } from "react-router-dom";

export default function Form5() {
  return (
    <div className="flex flex-col justify-center items-center h-screen  mad:ml-20 mad:pl-10 ml-[10rem] pl-5 pb-5 ">
      <img
        src="https://i.ibb.co/D84R9Qx/Avatar.png"
        className="h-[4rem] w-[4rem]"
      />
      <span className="text-white text-3xl mt-7">Vertexia</span>
      <span className="text-[1rem] text-sg6 mt-2">vertexia.artficium.app</span>
      <div className="mt-10">
        <span className="text-[1rem] mr-5 text-nb3/50">Change workspace</span>
        <button className="regjoin">
          <Link to="/create4">Join Now</Link>
        </button>
      </div>
      <div className="mt-10 flex flex-row">
        <img src="https://i.ibb.co/HTJBv0h/Users.png" className=" h-10" />
        <span className="text-[1rem] mt-3 ml-5 text-nb3/70">
          and 873 others have already joined
        </span>
      </div>
    </div>
  );
}
