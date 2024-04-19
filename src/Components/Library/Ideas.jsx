// eslint-disable-next-line react/prop-types
export default function Ideas({ title, details, link3 }) {
  return (
    <div className="flex flex-col w-[19rem] h-[10rem] mad6:w-[14rem] bg-nb8 rounded-lg mt-5 ml-2 mad6:ml-1 mad5:w-[26rem] mad5:h-[14rem]">
      <span className="text-[1rem] text-white ml-5 mt-5 mad5:text-[1.2rem] mad5:mr-2 mad6:text-xs">
        {title}
      </span>
      <span className="text-[1rem] text-nb4 ml-5 mt-2 mad5:text-xl mad5:mt-4 mad6:text-xs">
        {details}
      </span>
      <div className="flex flex-row">
        <img
          src={link3}
          className="h-10 w-30 ml-5 mt-2 mad5:h-[3rem] mad5:w-[10rem] mad5:ml-5 mad5:mt-[2em]"
        />
      </div>
    </div>
  );
}
