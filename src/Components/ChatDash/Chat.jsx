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
        <div className="flex flex-row ml-5 mt-10 mad1:mt-5">
          <span className="text-[1.4rem] mad1:text-[1rem] mad2:text-[1rem]  text-white font-medium">
            Spaceship Crew
          </span>
          <div className="flex flex-row text-white ml-[38rem] mad1:ml-[36rem] mad2:ml-[36rem] mad:absolute mad:right-80">
            <FaRegStar size={20} />
            <BsThreeDotsVertical className="ml-7" size={20} />
          </div>
        </div>
        <div className="chatuser">
          <div className="flex flex-row ">
            <Image7 link="https://i.ibb.co/k46rwn4/Avatar.png" />
            <span className="text-[1rem] text-white mt-4 ml-3">Adam Green</span>
            <span className="text-xs text-nb3 mt-5 ml-3">5 min ago</span>
          </div>
          <span className="text-[1rem] ml-16 text-nb3 mt-1">
            Hey guys, I was thinking about some character ideas for our show.
            What do you think we should focus on?
          </span>
        </div>
        <div className="chatuser">
          <div className="flex flex-row ">
            <Image7 link="https://i.ibb.co/w0bbWF7/Avatar.png" />
            <span className="text-[1rem] text-white mt-4 ml-3">Emily Liu</span>
            <span className="text-xs text-nb3 mt-5 ml-3">10 min ago</span>
          </div>
          <span className="text-[1rem] ml-16 text-nb3 mt-1">
            Well, we definitely need a strong leader character who can command
            the crew and make tough decisions. @Artificium, can you help?
          </span>
        </div>
        <div className="chatuser">
          <div className="flex flex-row ">
            <Image7 link="https://i.ibb.co/w0bbWF7/Avatar.png" />
            <span className="text-[1rem] text-white mt-4 ml-3">Adam Green</span>
            <span className="text-xs text-nb3 mt-5 ml-3">5 min ago</span>
          </div>
          <span className="text-[1rem] ml-16 text-nb3 mt-1">
            Hey guys, I was thinking about some character ideas for our show.
            What do you think we should focus on?
          </span>
        </div>

        <div className="mad:flex mad:justify-center mad:items-center mad2:mt-10 mad3:mt-10">
          <Input />
        </div>
      </div>
      <div className="user">
        <div className="flex flex-row ml-3 mt-5">
          <span className="text-[1rem] mad1:text-[0.9rem] mad2:text-[0.9rem] text-nb3 ">
            Currently Online
          </span>
          <span className="text-[1rem] text-nb3 ml-[5rem] mad1:ml-[3rem] mad1:absolute mad1:right-0 mad2:ml-[3rem] mad2:absolute mad2:right-0 mad2:mr-4 mad3:ml-[3rem] mad3:absolute mad3:right-0 mad3:mr-4">
            2
          </span>
        </div>
        <div className="flex flex-row mt-3">
          <img
            src="https://i.ibb.co/5xM8QVp/Avatar.png"
            className="h-11 mt-3 ml-3"
          />
          <div className="flex flex-col">
            <span className="text-[1rem] mad1:text-[0.9rem] mad2:text-[0.9rem] text-white mt-3 ml-2">
              Adam Green
            </span>
            <span className="text-xs text-db5 ml-2">Exploring Library</span>
          </div>
        </div>
        <div className="flex flex-row mt-3">
          <img
            src="https://i.ibb.co/hXDdzJH/Avatar.png"
            className="h-11 mt-3 ml-3"
          />
          <div className="flex flex-col">
            <span className="text-[1rem] mad1:text-[0.9rem] mad2:text-[0.9rem] text-white mt-3 ml-2">
              David Singh 👹
            </span>
            <span className="text-xs text-db5 ml-2">Exploring Library</span>
          </div>
        </div>

        <div className="flex flex-row mt-3">
          <img
            src="https://i.ibb.co/5xM8QVp/Avatar.png"
            className="h-11 mt-3 ml-3"
          />
          <div className="flex flex-col">
            <span className="text-[1rem] mad1:text-[0.9rem] mad2:text-[0.9rem] text-white mt-3 ml-2">
              Adam Green
            </span>
            <span className="text-xs text-db5 ml-2">Exploring Library</span>
          </div>
        </div>
        <div className="flex flex-row mt-3">
          <img
            src="https://i.ibb.co/k46rwn4/Avatar.png"
            className="h-11 mt-3 ml-3"
          />
          <div className="flex flex-col">
            <span className="text-[1rem] mad1:text-[0.9rem] mad2:text-[0.9rem] text-white mt-3 ml-2">
              Adam Green
            </span>
            <span className="text-xs text-db5 ml-2">Exploring Library</span>
          </div>
        </div>
        <div className="flex flex-row ml-3 mt-5">
          <span className="text-[1rem] mad1:text-[0.9rem] mad2:text-[0.9rem] text-nb3">
            Currently Offline
          </span>
          <span className="text-[1rem] text-nb3  mad1:absolute mad1:right-0 mad1:mr-4 mad2:absolute mad2:right-0 mad2:mr-4 mad3:absolute mad3:right-0 mad3:mr-4 pl-5 ml-[4rem]">
            1
          </span>
        </div>
        <div className="flex flex-row mt-3">
          <img
            src="https://i.ibb.co/w0bbWF7/Avatar.png"
            className="h-11 mt-3 ml-3 opacity-60"
          />
          <div className="flex flex-col opacity-60">
            <span className="text-[1rem] mad1:text-[0.9rem] text-white mt-3 ml-2">
              Lucas Ortiz
            </span>
            <span className="text-xs text-white ml-2 mt-1">
              Last visit: 14 hr ago
            </span>
          </div>
        </div>
        <div className="flex flex-row absolute bottom-0 mb-10">
          <div className="flex flex-row ml-3 mt-8">
            <IoChatboxOutline className="text-white" size={20} />
            <span className="text-[1rem] mad1:text-[0.9rem] text-white ml-2">
              Chats
            </span>
          </div>

          <div className="flex flex-row ml-10 mt-6 mad1:ml-4 rounded-lg">
            <span className="text-[1rem] mad1:text-[0.9rem] mad1:ml-0 text-white ml-2 mt-2">
              Members
            </span>
            <IoPersonOutline className=" ml-3 mt-2 text-sg5" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
