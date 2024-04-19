// eslint-disable-next-line react/prop-types
export default function Img({ link }) {
  return (
    <div>
      <img
        src={link}
        className="flex absolute top-0 right-0 h-1/2 w-1/2 mad:h-1/1 mad:w-1/3 min-h-screen mad6:h-1/1 mad6:w-1/1"
      />
    </div>
  );
}
