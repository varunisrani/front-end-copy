import { IoChatboxOutline, IoPersonOutline } from "react-icons/io5";

export default function User() {
  return (
    <div className="user">
      <div className="flex flex-row ml-3 mt-5">
        <span className="text-[1rem] mad1:text-[0.9rem] mad2:text-[0.9rem] text-nb3 mad5:text-xl">
          Currently Online
        </span>
        <span className="text-[1rem] text-nb3 ml-[5rem] mad1:ml-[3rem] mad1:absolute mad1:right-0 mad2:ml-[3rem] mad2:absolute mad2:right-0 mad2:mr-4 mad3:ml-[3rem] mad3:absolute mad3:right-0 mad3:mr-4 mad5:ml-[3rem] mad5:absolute mad5:right-0 mad5:mr-4 mad5:text-xl">
          2
        </span>
      </div>
      <div className="flex flex-row mt-3">
        <img
          src="https://i.ibb.co/5xM8QVp/Avatar.png"
          className="h-11 mt-3 ml-3 mad5:h-[4rem]"
        />
        <div className="flex flex-col">
          <span className="text-[1rem] mad1:text-[0.9rem] mad2:text-[0.9rem] text-white mt-3 ml-2 mad5:text-xl mad5:mt-5">
            Adam Green
          </span>
          <span className="text-xs text-db5 ml-2 mad5:text-[1rem]">
            Exploring Library
          </span>
        </div>
      </div>
      <div className="flex flex-row mt-3">
        <img
          src="https://i.ibb.co/hXDdzJH/Avatar.png"
          className="h-11 mt-3 ml-3 mad5:h-[4rem]"
        />
        <div className="flex flex-col">
          <span className="text-[1rem] mad1:text-[0.9rem] mad2:text-[0.9rem] text-white mt-3 ml-2 mad5:text-xl mad5:mt-5">
            David Singh 👹
          </span>
          <span className="text-xs text-db5 ml-2">Exploring Library</span>
        </div>
      </div>

      <div className="flex flex-row mt-3">
        <img
          src="https://i.ibb.co/5xM8QVp/Avatar.png"
          className="h-11 mt-3 ml-3 mad5:h-[4rem]"
        />
        <div className="flex flex-col">
          <span className="text-[1rem] mad1:text-[0.9rem] mad2:text-[0.9rem] text-white mt-3 ml-2 mad5:text-xl mad5:mt-5">
            Adam Green
          </span>
          <span className="text-xs text-db5 ml-2">Exploring Library</span>
        </div>
      </div>
      <div className="flex flex-row mt-3">
        <img
          src="https://i.ibb.co/k46rwn4/Avatar.png"
          className="h-11 mt-3 ml-3 mad5:h-[3rem]"
        />
        <div className="flex flex-col">
          <span className="text-[1rem] mad1:text-[0.9rem] mad2:text-[0.9rem] text-white mt-3 ml-2 mad5:text-xl mad5:mt-3 mad5:ml-5">
            Adam Green
          </span>
          <span className="text-xs text-db5 ml-2 mad5:ml-5">
            Exploring Library
          </span>
        </div>
      </div>
      <div className="flex flex-row ml-3 mt-5">
        <span className="text-[1rem] mad1:text-[0.9rem] mad2:text-[0.9rem] text-nb3 mad5:text-xl">
          Currently Offline
        </span>
        <span className="text-[1rem] text-nb3  mad1:absolute mad1:right-0 mad1:mr-4 mad2:absolute mad2:right-0 mad2:mr-4 mad3:absolute mad3:right-0 mad3:mr-4 pl-5 ml-[4rem] mad5:text-xl">
          1
        </span>
      </div>
      <div className="flex flex-row mt-3">
        <img
          src="https://i.ibb.co/w0bbWF7/Avatar.png"
          className="h-11 mt-3 ml-3 opacity-60 mad5:h-[4rem]"
        />
        <div className="flex flex-col opacity-60">
          <span className="text-[1rem] mad1:text-[0.9rem] text-white mt-3 ml-2 mad5:text-xl mad5:mt-4">
            Lucas Ortiz
          </span>
          <span className="text-xs text-white ml-2 mt-1 mad5:text-[1rem]">
            Last visit: 14 hr ago
          </span>
        </div>
      </div>
      <div className="flex flex-row mad4:absolute mad4:bottom-0 mad4:mb-10 mad5:absolute mad5:bottom-0 mad5:mb-[16rem]">
        <div className="flex flex-row ml-3 mt-8">
          <IoChatboxOutline className="text-white mad5:mt-1" size={20} />
          <span className="text-[1rem] mad1:text-[0.9rem] text-white ml-2 mad5:text-xl">
            Chats
          </span>
        </div>

        <div className="flex flex-row ml-10 mt-6 mad1:ml-4 rounded-lg ">
          <span className="text-[1rem] mad1:text-[0.9rem] mad1:ml-0 text-white ml-2 mt-2 mad5:text-xl">
            Members
          </span>
          <IoPersonOutline
            className=" ml-3 mt-2 text-sg5 mad5:mt-3"
            size={20}
          />
        </div>
      </div>
    </div>
  );
}
