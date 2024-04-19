// eslint-disable-next-line react/prop-types
export default function Input({ name }) {
  return (
    <div className="flex flex-col ">
      <span className="text-xs text-nb3 mb-2 mad5:text-xl">{name}</span>
      <div className="flex flex-row">
        <input
          className="w-[20rem] mad5:w-[25rem] mad5:py-4 mad5:text-xl mad6:w-[13rem] mad6:py-3 mad6:text-xs px-2 py-3 bg-nb6 text-[0.9rem] text-white rounded-lg border border-gray-100/10"
          placeholder={name}
        />
      </div>
    </div>
  );
}
