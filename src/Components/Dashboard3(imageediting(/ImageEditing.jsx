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
    <div className="flex flex-col w-full bg-nb8 mt-3 h-[28rem] mad1:h-[24rem] mad2:h-[25rem] mad5:h-[35rem] mad6:h-[27rem] mad:w-full mad:h-[20rem] ml-3 mb-1">
      <div className="flex flex-row mt-5 ml-5">
        <IoChevronBack className="text-white mt-1" size={20} />
        <span className="text-xl text-white font-medium ml-5">
          Modern spaceship in cosmos
        </span>
        <div className="flex flex-row absolute right-0 mr-10 gap-5">
          <CiStar className="text-white" size={20} />
          <div className="flex flex-row gap-1">
            <span className="text-white text-[1rem]">Export</span>
            <FiShare className="text-white" size={20} />
          </div>
          <BsThreeDotsVertical className="text-white " size={20} />
        </div>
      </div>
      <div className="flex flex-row ">
        <img
          src="https://i.ibb.co/ZN1yDK7/Image.png"
          className="h-[22rem] w-[22rem] mad1:h-[18rem] mad2:h-[18rem] mad2:w-[18rem] mad1:w-[18rem] rounded-lg ml-5 mt-5 mad:h-[15rem] mad:w-[15rem] mad5:h-[30rem] mad5:w-[30rem] mad6:h-[16rem] mad6:w-[16rem] mad6:mt-[5rem]"
        />
        <div className="flex flex-col absolute  mr-20 mad6:mr-10  mt-5 right-0 bg-nb8 w-[42rem] h-[21rem] mad1:w-[35rem] mad1:h-[18rem] mad2:h-[18rem] mad: border border-nb3 rounded-lg mad:mt-10 glitch:ml-20 mad5:w-[60rem]  mad5:h-[28rem] mad6:w-[34rem]  mad6:h-[20rem]">
          <div className="flex flex-row text-white gap-2 ml-2 mt-2 py-2 w-[41rem] mad1:w-[34rem] border border-nb3 rounded-lg mad5:w-[59rem] mad6:w-[33rem]">
            <AiOutlineScan className="ml-2" size={20} />
            <CiCamera size={20} />
            <LuSun size={20} />
            <PiMagicWandLight size={20} />
          </div>
          <div className="flex flex-row text-[1rem]  text-white ml-5 mt-5">
            {color ? (
              <FaAngleUp onClick={color1} size={20} />
            ) : (
              <FaAngleDown onClick={setcolor} size={20} />
            )}

            <span className="text-[1rem] ml-2">Color</span>
            {effect ? (
              <FaAngleUp onClick={effect1} size={20} className="ml-2" />
            ) : (
              <FaAngleDown onClick={seteffec} size={20} className="ml-2" />
            )}
            <span className="text-[1rem] ml-2">Effects</span>
          </div>
          {color && (
            <img src="https://i.ibb.co/1zZ1T6T/List.png" className="mt-5" />
          )}

          {effect && (
            <div className="flex flex-col mt-5">
              <div className="flex flex-row ml-5 mt-3 text-white mad1:flex mad1:flex-row">
                <span className="text-[1rem]">Flare bokeh</span>
                <span className="text-[1rem] ml-[23rem] mad1:ml-[15rem] mad6:ml-[14rem] text-nb3">
                  0.25, 0.75, H255
                </span>
                <MdModeEditOutline className="ml-3" />
                <FaRegEye className="ml-3" />
              </div>
              <div className="flex flex-row ml-5 mt-3 text-white">
                <span className="text-[1rem]">Flare bokeh</span>
                <span className="text-[1rem] ml-[23rem] mad1:ml-[15rem] mad6:ml-[14rem] text-nb3">
                  0.25, 0.75, H255
                </span>
                <MdModeEditOutline className="ml-3" />
                <FaRegEye className="ml-3" />
              </div>
              <div className="flex flex-row justify-center items-center text-white text-xs mt-5 ">
                <IoMdAddCircleOutline size={20} />
                <span className="text-[1rem] ml-3">Add effects</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
