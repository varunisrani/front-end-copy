import { Link } from "react-router-dom";

export default function Form5() {
  return (
    <div className="flex flex-col h-screen justify-center items-center mad:ml-20 mad:pl-10  ">
      <img src="https://i.ibb.co/D84R9Qx/Avatar.png" />
      <span className="text-white mt-5">Vertexia</span>
      <span className="text-xs text-sg6">vertexia.artficium.app</span>
      <div className="mt-10">
        <span className="text-xs text-nb3">Change workspace</span>
        <button className="regjoin">
          <Link to="/create4">Join Now</Link>
        </button>
      </div>
      <div className="mt-10 flex flex-row">
        <img src="https://i.ibb.co/HTJBv0h/Users.png" className=" h-10" />
        <span className="text-xs mt-3 ml-5 text-nb3">
          and 873 others have already joined
        </span>
      </div>
    </div>
  );
}
