import Button1 from "./Button1";
import Image1 from "./Image1";

export default function ImageChat1() {
  return (
    <div className="imagemain">
      <div className="flex flex-row mt-10">
        <img
          src="https://i.ibb.co/CVv9bLv/Avatar.png"
          className="h-[2rem]  ml-10"
        />
        <span className="  mad:ml-4 text-white text-[1rem] mt-1 ml-6 font-medium mad5:text-xl">
          Artificium
        </span>
      </div>
      <span className="text-[1rem]  ml-[6rem] text-nb3 mt-3 mad:ml-12">
        Sure thing! How about these spaceship names:
      </span>
      <div className="flex flex-row gap-3 mt-4 ml-[6rem] mad:ml-12">
        <Button1 title="Starfire" />
        <Button1 title="Celestia" />
        <Button1 title="Cosmic Voyager" />
      </div>
      <span className="text-[1rem] ml-[6rem] text-nb3  mt-7 mad:ml-12">
        Here are a few concept arts that also might inspire you. Take a look!
      </span>
      <div className="flex flex-row ml-[6rem] mt-5 gap-7 mad:ml-12">
        <Image1 link="https://i.ibb.co/sFbbrPN/Image.png" />
        <Image1 link="https://i.ibb.co/Kb4J1kB/Image.png" />
        <Image1 link="https://i.ibb.co/09dLmWX/Image.png" />
      </div>
    </div>
  );
}
