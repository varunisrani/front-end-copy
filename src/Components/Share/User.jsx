// eslint-disable-next-line react/prop-types
export default function User({ image, name, tag, role }) {
  return (
    <div className="flex flex-row mt-1">
      <img src={image} className="h-8 mt-3 ml-3" />
      <div className="flex flex-col text-xs mt-3 ml-2">
        <span className="text-white">{name}</span>
        <span className="text-sg5">@{tag}</span>
      </div>
      <button className="w-[3rem] h-[2rem] text-sg5 text-xs rounded-lg mt-4 absolute right-60 bg-gradient-to-b from-[#232526] via-[#232526] to-[#414345]">
        {role}
      </button>
    </div>
  );
}
