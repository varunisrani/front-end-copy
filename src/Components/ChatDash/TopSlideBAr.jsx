import { IoShareSocial } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiFolderOn } from "react-icons/ci";

export default function TopSlideBAr() {
  return (
    <div className="topmain">
      <nav className="topslidebar">
        <div className="flex flex-row">
          <div className="flex flex-col ml-5 mt-5">
            <span className="text-xl text-white">Orbital Oddysey</span>
            <span className="text-xs text-nb3">
              Marketing Campaign for a new TV series Launch
            </span>
          </div>
          <div className="flex flex-row absolute right-0 top-4 mt-2 mr-10">
            <img src="https://i.ibb.co/sKgmScn/Users.png" className="h-8" />
            <IoShareSocial className="text-white mt-2 ml-7" />
            <CiEdit className="text-white mt-2 ml-7" />
          </div>
        </div>
        <div className="flex flex-row text-xs text-white ml-5 mt-8 ">
          <div className="flex flex-row hover:text-sg5">
            <span>Artificium</span>
          </div>
          <div className="flex flex-row hover:text-sg5">
            <IoChatbubbleOutline className="ml-5" size={15} />
            <span className="ml-2">Chat</span>
          </div>
          <div className="flex flex-row">
            <CiFolderOn className="ml-5" size={15} />
            <span className="ml-2">Library</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
