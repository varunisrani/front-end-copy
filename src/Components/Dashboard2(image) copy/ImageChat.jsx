import Image2 from "./Image2";

export default function ImageChat() {
  return (
    <div className="imagemain">
      <div className="flex flex-row mt-3">
        <img src="https://i.ibb.co/CVv9bLv/Avatar.png" className="h-5  ml-3" />
        <span className=" ml-2 text-white text-xs">Artificium</span>
      </div>
      <span className="text-xs text-nb3 ml-10 mt-1">
        I'm glad you like the name Cosmic Voyager! And I agree, it's a great
        name for a spaceship. As for the concept art, I have some new designs
        that might be more to your liking. Take a look at these images.
      </span>
      <div className="flex flex-row ml-10 mt-4 gap-7 rounded-lg">
        <Image2 link="https://i.ibb.co/sP9Zd2P/Image.png" />
        <Image2 link="https://i.ibb.co/ZN1yDK7/Image.png" />
        <Image2 link="https://i.ibb.co/T2XF8G6/Image.png" />
      </div>
    </div>
  );
}
