import { FaArrowRightLong } from "react-icons/fa6";
// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Rec({ icon1, title, text1, text2, text3, text4 }) {
  return (
    <div className="flex flex-col ml-3">
      <icon />
      <span className="text-white text-2xl text-center">{title}</span>
      <div className="flex flex-col  gap-2 mt-5">
        <div className="flex flex-row px-2 py-2 bg-gradient-to-b from-[#000000] via-black-white to-[#434343] rounded-lg;">
          <span className="ml-2 text-white text-[1rem]">{text1}</span>
          <FaArrowRightLong className="mt-1 ml-2 text-white" size={15} />
        </div>
        <div className="flex flex-row px-2 py-2 bg-gradient-to-b from-[#000000] via-black-white to-[#434343] rounded-lg;">
          <span className="ml-2 text-white text-[1rem]">{text2}</span>
          <FaArrowRightLong className="mt-1 ml-2 text-white" size={15} />
        </div>
        <div className="flex flex-row px-2 py-2 bg-gradient-to-b from-[#000000] via-black-white to-[#434343] rounded-lg;">
          <span className="ml-2 text-white text-[1rem]">{text3}</span>
          <FaArrowRightLong className="mt-1 ml-2 text-white" size={15} />
        </div>
      </div>
    </div>
  );
}
