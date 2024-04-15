import Input from "./Input";
import { FaRegStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoChatboxOutline, IoPersonOutline } from "react-icons/io5";
import Image6 from "./Image6";

export default function Chat() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col ">
        <div className="flex flex-row ml-2 mt-5">
          <span className="text-xs text-white font-medium">Spaceship Crew</span>
          <div className="flex flex-row text-white ml-60">
            <FaRegStar />
            <BsThreeDotsVertical className="ml-7" />
          </div>
        </div>
        <div className="flex flex-col w-[25rem] h-[14rem] bg-nb6 rounded-lg mt-2 border border-nb4/20 border-opacity-6 mad:mt-10">
          <div className="flex flex-row">
            <img
              src="https://i.ibb.co/k46rwn4/Avatar.png"
              className="h-8 mt-3 ml-3"
            />
            <span className="text-xs text-white mt-4 ml-3">Artificium</span>
            <span className="text-xs text-nb3 mt-4 ml-3">Just Now</span>
          </div>
          <span className="text-xs ml-14 text-nb3 mt-1">
            Of course, I'd be happy to help. How about a character named Captain
            Drake? He's a natural born leader with years of experience in space
            exploration. Here are a few concept arts that might help bring him
            to life.
          </span>
          <div className="flex flex-row gap-2 ml-14 mt-3">
            {" "}
            <Image6 link="https://i.ibb.co/sP9Zd2P/Image.png" />
            <Image6 link="https://i.ibb.co/ZN1yDK7/Image.png" />
            <Image6 link="https://i.ibb.co/T2XF8G6/Image.png" />
          </div>
        </div>
        <div className="mad:mt-5">
          <Input />
        </div>
      </div>
      <div className="flex flex-col mad:absolute mad:right-0 mad:mr-10">
        <div className="flex flex-row ml-3 mt-5">
          <span className="text-xs text-nb3">Currently Online</span>
          <span className="text-xs text-nb3 ml-20 pl-5">2</span>
        </div>
        <div className="flex flex-row mt-3">
          <img
            src="https://i.ibb.co/5xM8QVp/Avatar.png"
            className="h-8 mt-3 ml-3"
          />
          <div className="flex flex-col">
            <span className="text-xs text-white mt-3 ml-2">Adam Green</span>
            <span className="text-xs text-db5 ml-2">Exploring Library</span>
          </div>
        </div>

        <div className="flex flex-row mt-3">
          <img
            src="https://i.ibb.co/5xM8QVp/Avatar.png"
            className="h-8 mt-3 ml-3"
          />
          <div className="flex flex-col">
            <span className="text-xs text-white mt-3 ml-2">Adam Green</span>
            <span className="text-xs text-db5 ml-2">Exploring Library</span>
          </div>
        </div>
        <div className="flex flex-row ml-3 mt-5">
          <span className="text-xs text-nb3">Currently Offline</span>
          <span className="text-xs text-nb3 ml-20 pl-5">1</span>
        </div>
        <div className="flex flex-row mt-3">
          <img
            src="https://i.ibb.co/w0bbWF7/Avatar.png"
            className="h-8 mt-3 ml-3 opacity-60"
          />
          <div className="flex flex-col opacity-60">
            <span className="text-xs text-white mt-3 ml-2">Lucas Ortiz</span>
            <span className="text-xs text-white ml-2 mt-1">
              Last visit: 14 hr ago
            </span>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row ml-3 mt-8">
            <IoChatboxOutline className="text-white" />
            <span className="text-xs text-white ml-2">Chats</span>
          </div>

          <div className="flex flex-row ml-10 mt-6  rounded-lg ">
            <span className="text-xs text-white ml-2 mt-2">Members</span>
            <IoPersonOutline className=" ml-3 mt-2 text-sg5" />
          </div>
        </div>
      </div>
    </div>
  );
}
