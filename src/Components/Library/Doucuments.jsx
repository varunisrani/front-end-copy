import Image4 from "./Image4";

export default function Doucuments({ name, details, link2 }) {
  return (
    <div className="flex flex-col w-[19rem] h-[10rem] mad5:w-[25rem] mad5:h-[14rem] bg-nb8 rounded-lg mt-5 ml-2">
      <span className="text-[1rem] text-white ml-5 mt-5 mad5:text-2xl">
        {name}
      </span>
      <span className="text-[1rem] text-nb4 ml-5 mt-2 mad5:text-xl">
        {details}
      </span>
      <div className="flex flex-row">
        <Image4 link={link2} />
      </div>
    </div>
  );
}
