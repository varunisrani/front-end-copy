import { BsThreeDotsVertical } from "react-icons/bs";
import Images from "./Images";
import Doucuments from "./Doucuments";
import Ideas from "./Ideas";

export default function Library() {
  return (
    <div className="library">
      <div className="librarysub">
        <div className="flex flex-row ">
          <span className="text-[1rem] text-white ml-5 mt-5 mad5:text-2xl">
            Images
          </span>
          <BsThreeDotsVertical
            className="text-white mt-7 ml-[13rem] mad5:ml-[18rem] "
            size={20}
          />
        </div>
        <Images />
        <Images />
        <Images />
      </div>
      <div className="">
        <div className="flex flex-row">
          <span className="text-[1rem] text-white ml-5 mt-5 mad5:text-2xl">
            Documents
          </span>
          <BsThreeDotsVertical className="text-white mt-7 ml-[13rem] mad5:ml-[15.6rem] mad6:ml-[8rem]" />
        </div>
        <Doucuments
          name="Character bios"
          details="3 documents, 43832 words"
          link2="https://i.ibb.co/sm7s1FX/Users.png"
        />
        <Doucuments
          name="Plot outline"
          details="3 documents, 43832 words"
          link2="https://i.ibb.co/sm7s1FX/Users.png"
        />
        <Doucuments
          name="Scene descriptions"
          details="3 documents, 43832 words"
          link2="https://i.ibb.co/sm7s1FX/Users.png"
        />
        <Doucuments
          name="Dialogue snippets"
          details=" documents, 43832 words"
          link2="https://i.ibb.co/sm7s1FX/Users.png"
        />
      </div>
      <div className="flex flex-col w-[20rem] h-screen bg-nb7">
        <div className="flex flex-row">
          <span className="text-[1rem] text-white ml-5 mt-5 mad5:text-2xl">
            Ideas
          </span>
          <BsThreeDotsVertical className="text-white mt-7 ml-[14rem] mad6:ml-[9rem]" />
        </div>
        <Ideas
          title="Concept art for potential new characters or locations."
          details="3 documents, 43832 words"
          link3="https://i.ibb.co/sm7s1FX/Users.png"
        />
        <Ideas
          title=" A list of potential plot points or story arcs."
          details="3 documents, 43832 words"
          link3="https://i.ibb.co/sm7s1FX/Users.png"
        />
        <Ideas
          title="Ideas for potential spin-offs or other related media."
          details="3 documents, 43832 words"
          link3="https://i.ibb.co/sm7s1FX/Users.png"
        />

        <Ideas
          title="Potential partnerships or collaborations with other artists or
            creators."
          details="3 documents, 43832 words"
          link3="https://i.ibb.co/sm7s1FX/Users.png"
        />
      </div>
    </div>
  );
}
