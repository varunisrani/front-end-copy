import Input from "./Input";
import { FaRegStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import Image7 from "./Image7";
export default function Chat() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row ml-2 mt-5">
          <span className="text-xs text-white font-medium">Spaceship Crew</span>
          <div className="flex flex-row text-white ml-60 mad:absolute mad:right-80">
            <FaRegStar />
            <BsThreeDotsVertical className="ml-7" />
          </div>
        </div>
        <div className="chatuser">
          <div className="flex flex-row ">
            <Image7 link="https://i.ibb.co/k46rwn4/Avatar.png" />
            <span className="text-xs text-white mt-4 ml-3">Adam Green</span>
            <span className="text-xs text-nb3 mt-4 ml-3">5 min ago</span>
          </div>
          <span className="text-xs ml-14 text-nb3 mt-1">
            Hey guys, I was thinking about some character ideas for our show.
            What do you think we should focus on?
          </span>
        </div>
        <div className="chatuser">
          <div className="flex flex-row ">
            <Image7 link="https://i.ibb.co/k46rwn4/Avatar.png" />
            <span className="text-xs text-white mt-4 ml-3">Adam Green</span>
            <span className="text-xs text-nb3 mt-4 ml-3">5 min ago</span>
          </div>
          <span className="text-xs ml-14 text-nb3 mt-1">
            Hey guys, I was thinking about some character ideas for our show.
            What do you think we should focus on?
          </span>
        </div>

        <div className="mad:flex mad:justify-center mad:items-center">
          <Input />
        </div>
      </div>
      <div className="user">
        <div className="flex flex-row ml-3 mt-5">
          <span className="text-xs text-nb3">Currently Online</span>
          <span className="text-xs text-nb3 ml-20 pl-5">2</span>
        </div>
        <div className="flex flex-row mt-3">
          <Image7 link="https://i.ibb.co/5xM8QVp/Avatar.png" />
          <div className="flex flex-col">
            <span className="text-xs text-white mt-3 ml-2">Adam Green</span>
            <span className="text-xs text-db5 ml-2">Exploring Library</span>
          </div>
        </div>
        <div className="flex flex-row mt-3">
          <Image7 link="https://i.ibb.co/hXDdzJH/Avatar.png" />
          <div className="flex flex-col">
            <span className="text-xs text-white mt-3 ml-2">David Singh 👹</span>
            <span className="text-xs text-db5 ml-2">Exploring Library</span>
          </div>
        </div>

        <div className="flex flex-row mt-3">
          <Image7 link="https://i.ibb.co/5xM8QVp/Avatar.png" />
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

          <div className="flex flex-row ml-10 mt-6  rounded-lg">
            <span className="text-xs text-white ml-2 mt-2">Members</span>
            <IoPersonOutline className=" ml-3 mt-2 text-sg5" />
          </div>
        </div>
      </div>
    </div>
  );
}
