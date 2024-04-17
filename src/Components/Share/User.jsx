// eslint-disable-next-line react/prop-types
export default function User({ image, name, tag, role }) {
  return (
    <div className="flex flex-row mt-2">
      <img src={image} className="h-10 mt-3 ml-3" />
      <div className="flex flex-col text-[1rem] mt-1 ml-2">
        <span className="text-white">{name}</span>
        <span className="text-sg5 text-xs">@{tag}</span>
      </div>
      <button className="w-[3rem] h-[2rem] text-sg5 text-xs rounded-lg mt-4 absolute right-[29rem] bg-gradient-to-b from-[#232526] via-[#232526] to-[#414345]">
        {role}
      </button>
    </div>
  );
}
