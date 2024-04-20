import Input from "../ChatDash/Input";
import { FaRegStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

import User from "../ChatDash/User";

export default function Chat() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col ">
        <div className="flex flex-row ml-5 mt-10 mad1:mt-5 mad5:ml-10 mad6:mt-7">
          <span className="text-[1.4rem]  mad1:text-[1rem] mad2:text-[1rem] mad5:text-[1.8rem]  text-white font-medium">
            Spaceship Crew
          </span>
          <div className="flex flex-row text-white ml-[38rem] mad1:ml-[36rem] mad2:ml-[36rem] mad:absolute mad:right-80 mad5:ml-[58rem]">
            <FaRegStar size={20} />
            <BsThreeDotsVertical className="ml-7" size={20} />
          </div>
        </div>
        <div className="flex flex-col w-[55rem]  mad1:w-[48rem] mad2:w-[48rem] mad5:w-[78rem] mad5:h-[32rem] mad6:w-[32rem] mad6:h-[20rem] h-[6rem] bg-nb6 rounded-lg mt-10 mad1:mt-0 mad2:mt-0 ml-5 border border-nb4 border-opacity-10 mad:mt-10 mad6:mt-7 mad6:mr-[8rem] mad5:h-[20rem]">
          <div className="flex flex-row mt-10 mad5:mt-1 mad6:mt-5 ">
            <img
              src="https://i.ibb.co/CVv9bLv/Avatar.png"
              className="h-[2rem]  ml-10 mad5:h-[3rem]"
            />
            <span className="mad:ml-4 text-white text-[1rem] mad1:text-[0.9rem] mad2:text-[0.9rem] mt-1 ml-6 font-medium mad5:text-xl mad5:mt-3">
              Artificium
            </span>
          </div>
          <span className="text-[1rem]  ml-[6rem] text-nb3 mt-3 mad:ml-12 mad5:text-xl mad5:ml-[7rem] mad5:mr-2 mad6:text-xs mad6:ml-[5.5rem]">
            I'm glad you like the name Cosmic Voyager! And I agree, it's a great
            name for a spaceship. As for the concept art, I have some new
            designs that might be more to your liking. Take a look at these
            images.
          </span>
          <span className="text-[1rem] ml-[6rem] text-nb3  mt-7 mad:ml-12 mad5:text-xl mad5:ml-[7rem] mad5:mr-2 mad6:text-xs mad6:ml-[5.4rem]">
            Here are a few concept arts that also might inspire you. Take a
            look!
          </span>
          <div className="flex flex-row ml-[6rem] mt-10 gap-7 mad:ml-12">
            <img
              src="https://i.ibb.co/sP9Zd2P/Image.png"
              className="h-[12rem] w-[12rem] mad:h-[9rem] mad:w-[9rem] mad1:h-[10rem] mad1:w-[10rem] mad2:h-[10rem] mad2:w-[10rem] mad5:h-[17rem] mad5:w-[17rem] mad6:h-[7rem] mad6:w-[7rem]"
            />
            <img
              src="https://i.ibb.co/ZN1yDK7/Image.png"
              className="h-[12rem] w-[12rem] mad:h-[9rem] mad:w-[9rem] mad1:h-[10rem] mad1:w-[10rem] mad2:h-[10rem] mad2:w-[10rem] mad5:h-[17rem] mad5:w-[17rem] mad6:h-[7rem] mad6:w-[7rem]"
            />
            <img
              src="https://i.ibb.co/T2XF8G6/Image.png"
              className="h-[12rem] w-[12rem] mad:h-[9rem] mad:w-[9rem] mad1:h-[10rem] mad1:w-[10rem] mad2:h-[10rem] mad2:w-[10rem] mad5:h-[17rem] mad5:w-[17rem] mad6:h-[7rem] mad6:w-[7rem]"
            />
          </div>
        </div>
        <div className="mad:mt-5 mad1:mt-[19rem] mad2:mt-[20rem] mad3:mt-[22rem] mad5:flex mad5:flex-row mad5:justify-center mad5:items-center mad5:mt-[1rem] mad6:ml-7 mad6:mt-10">
          <Input />
        </div>
      </div>
      <div className="mad5:absolute mad5:right-0 mad5:mr-20">
        <User />
      </div>
    </div>
  );
}
