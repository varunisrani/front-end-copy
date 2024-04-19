import { CiFolderOn } from "react-icons/ci";
import { IoChatbubbleOutline, IoResize } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import Image5 from "./Image5";
export default function RightMenu() {
  return (
    <div className="rightmenu">
      <div className="flex flex-row ml-5 mt-5">
        <span className="text-xs text-white mad5:text-xl">Captain Drake</span>
        <div className="flex flex-row text-white absolute right-0 mr-5">
          <IoResize className="mr-5" size={20} />
          <MdClose size={20} />
        </div>
      </div>
      <span className="text-xs text-nb4 ml-5 mt-3 mad5:text-[1rem]">
        Natural born leader with years of experience in space exploration.
      </span>
      <div className="rightmenu1">
        <div className="flex flex-row hover:text-sg5">
          <span>Artificium</span>
        </div>
        <div className="flex flex-row hover:text-sg5">
          <IoChatbubbleOutline className="ml-5" size={15} />
          <span className="ml-2">Chat</span>
        </div>
        <div className="flex flex-row">
          <CiFolderOn className="ml-5" size={15} />
          <span className="ml-2">Library</span>
        </div>
      </div>
      <span className="text-xs text-nb3 ml-5 mt-5">12 April</span>
      <div className="flex flex-row ml-5 mt-5 gap-3">
        <Image5 link="https://i.ibb.co/zRZML4f/Image.png" />
        <Image5 link="https://i.ibb.co/K0kST3p/Image.png" />
        <Image5 link="https://i.ibb.co/YpqmbDd/Image.png" />
      </div>
      <span className="text-xs text-nb3 ml-5 mt-5">2 April</span>
      <div className="flex flex-row ml-5 mt-5 gap-3">
        <Image5 link="https://i.ibb.co/K0kST3p/Image.png" />
      </div>
    </div>
  );
}
