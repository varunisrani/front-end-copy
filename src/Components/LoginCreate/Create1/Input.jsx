// eslint-disable-next-line react/prop-types
export default function Input({ name }) {
  return (
    <div className="flex flex-col ">
      <span className="text-xs text-nb3 mb-2">{name}</span>
      <div className="flex flex-row">
        <input className="inputcreate" placeholder={name} />
      </div>
    </div>
  );
}
