// eslint-disable-next-line react/prop-types
export default function Img({ link }) {
  return (
    <div>
      <img
        src={link}
        className="flex absolute top-0 right-0 h-1/1 w-1/3 mad:h-1/1 mad:w-1/3 min-h-screen"
      />
    </div>
  );
}
