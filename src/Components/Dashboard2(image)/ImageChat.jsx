import Button1 from "./Button1";
import Image1 from "./Image1";

export default function ImageChat() {
  return (
    <div className="imagemain">
      <div className="flex flex-row mt-3">
        <img src="https://i.ibb.co/CVv9bLv/Avatar.png" className="h-5  ml-3" />
        <span className=" ml-2 mad:ml-4 text-white text-xs">Artificium</span>
      </div>
      <span className="text-xs text-nb3 ml-3 mt-1 mad:ml-12">
        Sure thing! How about these spaceship names:
      </span>
      <div className="flex flex-row gap-3 mt-3 ml-3 mad:ml-12">
        <Button1 title="Starfire" />
        <Button1 title="Celestia" />
        <Button1 title="Cosmic Voyager" />
      </div>
      <span className="text-xs text-nb3 ml-3 mt-3 mad:ml-12">
        Here are a few concept arts that also might inspire you. Take a look!
      </span>
      <div className="flex flex-row ml-3 mt-4 gap-7 mad:ml-12">
        <Image1 link="https://i.ibb.co/sFbbrPN/Image.png" />
        <Image1 link="https://i.ibb.co/Kb4J1kB/Image.png" />
        <Image1 link="https://i.ibb.co/09dLmWX/Image.png" />
      </div>
    </div>
  );
}
