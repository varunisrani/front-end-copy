import Input from "./Input";
import { FaRegStar } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

import User from "./User";
import Chatcomp from "./Chatcomp";
export default function Chat() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col mad5:ml-5">
        <div className="flex flex-row ml-5 mt-10 mad1:mt-5 ">
          <span className="text-[1.4rem]  mad1:text-[1rem] mad2:text-[1rem] mad5:text-[1.8rem]  text-white font-medium">
            Spaceship Crew
          </span>
          <div className="flex flex-row text-white ml-[38rem] mad1:ml-[36rem] mad2:ml-[36rem] mad:absolute mad:right-80 mad5:ml-[58rem]">
            <FaRegStar size={20} />
            <BsThreeDotsVertical className="ml-7" size={20} />
          </div>
        </div>
        <div className="mad5:flex mad5:flex-col mad5:justify-center mad5:items-center mad5:mt-5">
          <Chatcomp
            link1="https://i.ibb.co/k46rwn4/Avatar.png"
            name="Adam Green"
            time="5"
            mes="Hey guys, I was thinking about some character ideas for our show.
            What do you think we should focus on?"
          />

          <Chatcomp
            link1="https://i.ibb.co/w0bbWF7/Avatar.png"
            name="Emily Liu"
            time="10"
            mes="Well, we definitely need a strong leader character who can command
            the crew and make tough decisions. @Artificium, can you help?"
          />
          <Chatcomp
            link1="https://i.ibb.co/w0bbWF7/Avatar.png"
            name="Adam Green"
            time="6"
            mes="Hey guys, I was thinking about some character ideas for our show.
            What do you think we should focus on?"
          />
        </div>

        <div className="mad:flex mad:justify-center mad:items-center mad2:mt-10 mad3:mt-10 mad5:flex mad5:flex-row mad5:justify-center mad5:items-center mad6:mt-6 mad6:mr-10">
          <Input />
        </div>
      </div>
      <div className="mad5:absolute mad5:right-0 mad5:mr-20">
        <User />
      </div>
    </div>
  );
}
