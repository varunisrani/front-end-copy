import Input from "../ChatDash/Input";
import { FaRegStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoChatboxOutline, IoPersonOutline } from "react-icons/io5";

export default function Chat() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col ">
        <div className="flex flex-row ml-5 mt-10 mad1:mt-5 mad2:mt-5">
          <span className="text-[1.4rem] mad1:text-[1rem] mad2:text-[1rem]  text-white font-medium">
            Spaceship Crew
          </span>
          <div className="flex flex-row text-white ml-[38rem] mad1:ml-[36rem] mad2:ml-[36rem] mad:absolute mad:right-80">
            <FaRegStar size={20} />
            <BsThreeDotsVertical className="ml-7" size={20} />
          </div>
        </div>
        <div className="flex flex-col w-[55rem] mad1:w-[48rem] mad2:w-[48rem] h-[6rem] bg-nb6 rounded-lg mt-10 mad1:mt-0 mad2:mt-0 ml-5 border border-nb4 border-opacity-10 mad:mt-10">
          <div className="flex flex-row mt-10">
            <img
              src="https://i.ibb.co/CVv9bLv/Avatar.png"
              className="h-[2rem]  ml-10"
            />
            <span className="  mad:ml-4 text-white text-[1rem] mad1:text-[0.9rem] mad2:text-[0.9rem] mt-1 ml-6 font-medium">
              Artificium
            </span>
          </div>
          <span className="text-[1rem]  ml-[6rem] text-nb3 mt-3 mad:ml-12">
            I'm glad you like the name Cosmic Voyager! And I agree, it's a great
            name for a spaceship. As for the concept art, I have some new
            designs that might be more to your liking. Take a look at these
            images.
          </span>
          <span className="text-[1rem] ml-[6rem] text-nb3  mt-7 mad:ml-12">
            Here are a few concept arts that also might inspire you. Take a
            look!
          </span>
          <div className="flex flex-row ml-[6rem] mt-10 gap-7 mad:ml-12">
            <img
              src="https://i.ibb.co/sP9Zd2P/Image.png"
              className="h-[12rem] w-[12rem] mad:h-[9rem] mad:w-[9rem] mad1:h-[10rem] mad1:w-[10rem] mad2:h-[10rem] mad2:w-[10rem]"
            />
            <img
              src="https://i.ibb.co/ZN1yDK7/Image.png"
              className="h-[12rem] w-[12rem] mad:h-[9rem] mad:w-[9rem] mad1:h-[10rem] mad1:w-[10rem] mad2:h-[10rem] mad2:w-[10rem]"
            />
            <img
              src="https://i.ibb.co/T2XF8G6/Image.png"
              className="h-[12rem] w-[12rem] mad:h-[9rem] mad:w-[9rem] mad1:h-[10rem] mad1:w-[10rem] mad2:h-[10rem] mad2:w-[10rem]"
            />
          </div>
        </div>
        <div className="mad:mt-5 mad1:mt-[19rem] mad2:mt-[20rem] mad3:mt-[22rem]">
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
