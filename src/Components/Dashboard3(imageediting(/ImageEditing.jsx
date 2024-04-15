import { IoChevronBack } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { FiShare } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineScan } from "react-icons/ai";
import { CiCamera } from "react-icons/ci";
import { LuSun } from "react-icons/lu";
import { PiMagicWandLight } from "react-icons/pi";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function ImageEditing() {
  const [color, setColor] = useState(false);
  const [effect, setEffect] = useState(false);

  function setcolor() {
    setColor(true);
    setEffect(false);
  }
  function color1() {
    setColor(false);
    setEffect(false);
  }
  function seteffec() {
    setEffect(true);
    setColor(false);
  }
  function effect1() {
    setColor(false);
    setEffect(false);
  }

  return (
    <div className="flex flex-col bg-nb8 mt-3 w-[40rem] h-[15rem] mad:w-full mad:h-[20rem]">
      <div className="flex flex-row mt-5 ml-5">
        <IoChevronBack className="text-white" />
        <span className="text-xs text-white font-bold ml-5">
          Modern spaceship in cosmos
        </span>
        <div className="flex flex-row absolute right-0 mr-10 gap-5">
          <CiStar className="text-white" />
          <div className="flex flex-row gap-1">
            <span className="text-white text-xs">Export</span>
            <FiShare className="text-white" />
          </div>
          <BsThreeDotsVertical className="text-white" />
        </div>
      </div>
      <div className="flex flex-row ">
        <img
          src="https://i.ibb.co/ZN1yDK7/Image.png"
          className="h-[11rem] w-[11rem] rounded-lg ml-5 mt-5 mad:h-[15rem] mad:w-[15rem]"
        />
        <div className="flex flex-col absolute  mr-20  mt-5 right-0 bg-nb8 w-[20rem] h-[11rem] border border-nb3 rounded-lg mad:mt-10 glitch:ml-20">
          <div className="flex flex-row text-white gap-2 ml-2 mt-2 py-2 w-[19rem] border border-nb3 rounded-lg ">
            <AiOutlineScan className="ml-2" />
            <CiCamera />
            <LuSun />
            <PiMagicWandLight />
          </div>
          <div className="flex flex-row text-white ml-2 mt-3">
            {color ? (
              <FaAngleUp onClick={color1} />
            ) : (
              <FaAngleDown onClick={setcolor} />
            )}

            <span className="text-xs ml-2">Color</span>
            {effect ? (
              <FaAngleUp onClick={effect1} className="ml-2" />
            ) : (
              <FaAngleDown onClick={seteffec} className="ml-2" />
            )}
            <span className="text-xs ml-2">Effects</span>
          </div>
          {color && (
            <img src="https://i.ibb.co/1zZ1T6T/List.png" className="mt-1" />
          )}

          {effect && (
            <div className="flex flex-col">
              <div className="flex flex-row ml-2 mt-3 text-white">
                <span className="text-xs">Flare bokeh</span>
                <span className="text-xs ml-20 text-nb3">0.25, 0.75, H255</span>
                <MdModeEditOutline className="ml-3" />
                <FaRegEye className="ml-3" />
              </div>
              <div className="flex flex-row ml-2 mt-3 text-white">
                <span className="text-xs">Flare bokeh</span>
                <span className="text-xs ml-20 text-nb3">0.25, 0.75, H255</span>
                <MdModeEditOutline className="ml-3" />
                <FaRegEye className="ml-3" />
              </div>
              <div className="flex flex-row justify-center items-center text-white text-xs mt-5">
                <IoMdAddCircleOutline />
                <span>Add effects</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
