import { BsThreeDotsVertical } from "react-icons/bs";
import Image3 from "./Image3";
import Image4 from "./Image4";

export default function Library() {
  return (
    <div className="library">
      <div className="librarysub">
        <div className="flex flex-row">
          <span className="text-[1rem] text-white ml-5 mt-5 ">Images</span>
          <BsThreeDotsVertical className="text-white mt-7 ml-[13rem]  " />
        </div>
        <div className="libraryimage">
          <span className="text-[1rem] text-white ml-5 mt-5">
            Captain Drake
          </span>
          <span className="text-xs text-nb4 ml-5 mr-2 mt-2">
            Natural born leader with years of experience in space exploration.
          </span>
          <div className="flex flex-row ml-5 mt-8 gap-2">
            <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
            <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
            <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
          </div>
        </div>
        <div className="libraryimage">
          <span className="text-[1rem] text-white ml-5 mt-5">
            Captain Drake
          </span>
          <span className="text-xs text-nb4 ml-5 mr-2 mt-2">
            Natural born leader with years of experience in space exploration.
          </span>
          <div className="flex flex-row ml-5 mt-8 gap-2">
            <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
            <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
            <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
          </div>
        </div>
        <div className="libraryimage">
          <span className="text-[1rem] text-white ml-5 mt-5">
            Captain Drake
          </span>
          <span className="text-xs text-nb4 ml-5 mr-2 mt-2">
            Natural born leader with years of experience in space exploration.
          </span>
          <div className="flex flex-row ml-5 mt-8 gap-2">
            <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
            <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
            <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex flex-row">
          <span className="text-[1rem] text-white ml-5 mt-5 ">Documents</span>
          <BsThreeDotsVertical className="text-white mt-7 ml-[13rem] " />
        </div>
        <div className="flex flex-col w-[19rem] h-[10rem] bg-nb8 rounded-lg mt-5 ml-2">
          <span className="text-[1rem] text-white ml-5 mt-5">
            Character bios
          </span>
          <span className="text-[1rem] text-nb4 ml-5 mt-2">
            3 documents, 43832 words
          </span>
          <div className="flex flex-row">
            <Image4 link="https://i.ibb.co/sm7s1FX/Users.png" />
          </div>
        </div>
        <div className="flex flex-col w-[19rem] h-[10rem] bg-nb8 rounded-lg mt-5 ml-2">
          <span className="text-[1rem] text-white ml-5 mt-5">Plot outline</span>
          <span className="text-[1rem] text-nb4 ml-5 mt-2">
            3 documents, 43832 words
          </span>
          <div className="flex flex-row">
            <Image4 link="https://i.ibb.co/sm7s1FX/Users.png" />
          </div>
        </div>
        <div className="flex flex-col w-[19rem] h-[10rem] bg-nb8 rounded-lg mt-5 ml-2">
          <span className="text-[1rem] text-white ml-5 mt-5">
            Scene descriptions
          </span>
          <span className="text-[1rem] text-nb4 ml-5 mt-2">
            3 documents, 43832 words
          </span>
          <div className="flex flex-row">
            <Image4 link="https://i.ibb.co/sm7s1FX/Users.png" />
          </div>
        </div>
        <div className="flex flex-col w-[19rem] h-[10rem] bg-nb8 rounded-lg mt-5 ml-2">
          <span className="text-[1rem] text-white ml-5 mt-5">
            Dialogue snippets
          </span>
          <span className="text-[1rem] text-nb4 ml-5 mt-2">
            3 documents, 43832 words
          </span>
          <div className="flex flex-row">
            <Image4 link="https://i.ibb.co/sm7s1FX/Users.png" />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[20rem] h-screen bg-nb7">
        <div className="flex flex-row">
          <span className="text-[1rem] text-white ml-5 mt-5 ">Ideas</span>
          <BsThreeDotsVertical className="text-white mt-7 ml-[14rem] " />
        </div>
        <div className="flex flex-col w-[19rem] h-[10rem] bg-nb8 rounded-lg mt-5 ml-2">
          <span className="text-[1rem] text-white ml-5 mt-5">
            Concept art for potential new characters or locations.
          </span>
          <span className="text-[1rem] text-nb4 ml-5 mt-2">
            3 documents, 43832 words
          </span>
          <div className="flex flex-row">
            <img
              src="https://i.ibb.co/sm7s1FX/Users.png"
              className="h-10 w-30 ml-5 mt-2"
            />
          </div>
        </div>
        <div className="flex flex-col w-[19rem] h-[10rem] bg-nb8 rounded-lg mt-5 ml-2">
          <span className="text-[1rem] text-white ml-5 mt-5">
            A list of potential plot points or story arcs.
          </span>
          <span className="text-[1rem] text-nb4 ml-5 mt-2">
            3 documents, 43832 words
          </span>
          <div className="flex flex-row">
            <img
              src="https://i.ibb.co/sm7s1FX/Users.png"
              className="h-10 w-30 ml-5 mt-2"
            />
          </div>
        </div>
        <div className="flex flex-col w-[19rem] h-[10rem] bg-nb8 rounded-lg mt-5 ml-2">
          <span className="text-[1rem] text-white ml-5 mt-5">
            Ideas for potential spin-offs or other related media.
          </span>
          <span className="text-[1rem] text-nb4 ml-5 mt-2">
            3 documents, 43832 words
          </span>
          <div className="flex flex-row">
            <img
              src="https://i.ibb.co/sm7s1FX/Users.png"
              className="h-10 w-30 ml-5 mt-2"
            />
          </div>
        </div>
        <div className="flex flex-col w-[19rem] h-[10rem] bg-nb8 rounded-lg mt-5 ml-2">
          <span className="text-[1rem] text-white ml-5 mt-5">
            Potential partnerships or collaborations with other artists or
            creators.
          </span>
          <span className="text-[1rem] text-nb4 ml-5 mt-2">
            3 documents, 43832 words
          </span>
          <div className="flex flex-row">
            <img
              src="https://i.ibb.co/sm7s1FX/Users.png"
              className="h-10 w-30 ml-5 mt-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
