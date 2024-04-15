import { IoMdClose } from "react-icons/io";
import { LuShare2 } from "react-icons/lu";
import User from "./User";
import { TbWorld } from "react-icons/tb";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";
export default function MainShare() {
  return (
    <div className="flex flex-col bg-nb6 w-[25rem] h-[28rem] rounded-lg ">
      <div className="flex flex-row ml-5 mt-6 mr-3">
        <span className="text-xs text-white">
          Manage who can view this project
        </span>
        <IoMdClose className="text-white ml-40" />
      </div>
      <span className="text-xs text-nb3 ml-5 mt-3">
        Select which users can access and view this project. Only users with
        access can view and edit the project.
      </span>
      <div className="flex flex-row ml-5 mt-3">
        <div className="flex flex-row w-[17rem] h-[2rem] bg-[#1A1D21] border border-nb4  rounded-lg"></div>
        <div className="flex flex-row px-3 py-2 bg-sg5 text-xs gap-2 rounded-lg ml-3">
          <span>Invite</span>
          <LuShare2 />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <User
          image="https://i.ibb.co/k46rwn4/Avatar.png"
          name="You"
          tag="ryan"
          role="Owner"
        />
        <User
          image="https://i.ibb.co/h2pHbMC/Avatar.png"
          name="Mia Park"
          tag="cute-mia"
          role="Editor"
        />
        <User
          image="https://i.ibb.co/Y2y6DWP/Avatar.png"
          name="Isabella Chen"
          tag="issa"
          role="Editor"
        />
        <User
          image="https://i.ibb.co/87tdNSy/Avatar.png"
          name="Andrew Garcia"
          tag="garci28"
          role="Viewer"
        />
      </div>
      <div className="flex flex-row text-white ml-3 mt-3">
        <IoMdAddCircleOutline />
        <span className="text-nb3 text-xs ml-3">and 5 more others</span>
      </div>
      <div className="w-[22rem] h-[3rem] bg-nb8 ml-5 mt-2 mb-2 rounded-lg flex flex-row">
        <TbWorld className="text-sg5  ml-2 mt-4" />
        <span className="text-xs text-white mt-4 ml-2">
          Anyone with the link
        </span>
        <span className="text-xs text-sg5 mt-4 ml-20">can view</span>
        <MdContentCopy className="text-white mt-4 ml-10" />
      </div>
    </div>
  );
}
