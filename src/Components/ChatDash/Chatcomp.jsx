import Image7 from "./Image7";

// eslint-disable-next-line react/prop-types
export default function Chatcomp({ link1, name, time, mes }) {
  return (
    <div className="chatuser">
      <div className="flex flex-row ">
        <Image7 link={link1} />
        <span className="text-[1rem] text-white mt-4 ml-3 mad5:text-xl mad5:mt-7 ">
          {name}
        </span>
        <span className="text-xs text-nb3 mt-5 ml-3 mad5:mt-9">
          {time} min ago
        </span>
      </div>
      <span className="text-[1rem] ml-16 text-nb3 mt-1 mad5:ml-[5.5rem] mad5:text-xl mr-2">
        {mes}
      </span>
    </div>
  );
}
