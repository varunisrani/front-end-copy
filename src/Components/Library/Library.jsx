import { BsThreeDotsVertical } from "react-icons/bs";
import Image3 from "./Image3";
import Image4 from "./Image4";

export default function Library() {
  return (
    <div className="library">
      <div className="librarysub">
        <div className="flex flex-row">
          <span className="text-xs text-white ml-5 mt-5 ">Images</span>
          <BsThreeDotsVertical className="text-white mt-5 ml-20 " />
        </div>
        <div className="libraryimage">
          <span className="text-xs text-white ml-2 mt-2">Captain Drake</span>
          <span className="text-xs text-nb4 ml-2 mt-2">
            Natural born leader with years of experience in space exploration.
          </span>
          <div className="flex flex-row ml-2 mt-2 gap-2">
            <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
            <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
            <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
          </div>
        </div>
        <div className="libraryimage">
          <span className="text-xs text-white ml-2 mt-2">Captain Drake</span>
          <span className="text-xs text-nb4 ml-2 mt-2">
            Natural born leader with years of experience in space exploration.
          </span>
          <div className="flex flex-row ml-2 mt-2 gap-2">
            <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
            <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
            <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-row">
          <span className="text-xs text-white ml-5 mt-5 ">Documents</span>
          <BsThreeDotsVertical className="text-white mt-5 ml-20 " />
        </div>
        <div className="flex flex-col w-[10rem] h-[7rem] bg-nb8 rounded-lg mt-5 ml-2">
          <span className="text-xs text-white ml-2 mt-2">Character bios</span>
          <span className="text-xs text-nb4 ml-2 mt-2">
            3 documents, 43832 words
          </span>
          <div className="flex flex-row">
            <Image4 link="https://i.ibb.co/sm7s1FX/Users.png" />
          </div>
        </div>
        <div className="flex flex-col w-[10rem] h-[7rem] bg-nb8 rounded-lg mt-5 ml-2">
          <span className="text-xs text-white ml-2 mt-2">Plot outline</span>
          <span className="text-xs text-nb4 ml-2 mt-2">
            1 document, 18745 words
          </span>
          <div className="flex flex-row">
            <Image4 link="https://i.ibb.co/sm7s1FX/Users.png" />
          </div>
        </div>
        <div className="flex flex-col w-[10rem] h-[7rem] bg-nb8 rounded-lg mt-5 ml-2">
          <span className="text-xs text-white ml-2 mt-2">
            5 documents, 23992 words
          </span>
          <span className="text-xs text-nb4 ml-2 mt-2">
            3 documents, 43832 words
          </span>
          <div className="flex flex-row">
            <Image4 link="https://i.ibb.co/sm7s1FX/Users.png" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[10rem] h-screen bg-nb6">
        <div className="flex flex-row">
          <span className="text-xs text-white ml-5 mt-5 ">Ideas</span>
          <BsThreeDotsVertical className="text-white mt-5 ml-20 " />
        </div>
        <div className="flex flex-col w-[12rem] h-[7rem] bg-nb8 rounded-lg mt-5 ml-2">
          <span className="text-xs text-white ml-3 mt-2">
            Concept art for potential new characters or locations.
          </span>
          <div className="flex flex-row">
            <Image4 link="https://i.ibb.co/sm7s1FX/Users.png" />
          </div>
        </div>
        <div className="flex flex-col w-[12rem] h-[7rem] bg-nb8 rounded-lg mt-5 ml-2">
          <span className="text-xs text-white ml-3 mt-2">
            A list of potential plot points or story arcs.
          </span>
          <div className="flex flex-row">
            <Image4 link="https://i.ibb.co/sm7s1FX/Users.png" />
          </div>
        </div>
        <div className="flex flex-col w-[12rem] h-[7rem] bg-nb8 rounded-lg mt-5 ml-2">
          <span className="text-xs text-white ml-3 mt-2">
            Ideas for potential spin-offs or other related media.
          </span>
          <div className="flex flex-row">
            <Image4 link="https://i.ibb.co/sm7s1FX/Users.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
