import { Link } from "react-router-dom";

export default function Form3() {
  return (
    <div className="Form">
      <div className="flex flex-col mt-12">
        <span className="text-2xl font-thin text-white">
          Join or Create a Workspace
        </span>
        <span className="text-xs text-nb3 mt-3">
          Connect with others by joining an existing workspace or create a new
          one to collaborate
        </span>
        <span className="text-xs text-nb3">with your team.</span>
        <div className="flex flex-row mt-10">
          <input
            className="px-10 w-[20rem] py-2 bg-nb6 text-xs text-white rounded-lg"
            placeholder="Your workspace URL .artificium.app"
          />
          <button className="w-[8rem] bg-sg5 text-xs rounded-lg ml-10">
            <Link to="/create3">Join Workspace</Link>
          </button>
        </div>
        <button className="regcreate">
          <Link to="/create3">Create new Workspace</Link>
        </button>
      </div>
    </div>
  );
}
