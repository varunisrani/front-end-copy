import Image1 from "../Dashboard2(image)/Image1";

export default function ImageChat() {
  return (
    <div className="imagemain">
      <div className="flex flex-row mt-10 mad6:mt-5">
        <img
          src="https://i.ibb.co/CVv9bLv/Avatar.png"
          className="h
Note: If your amount is deducted from account and the application shows payment fail then please wait for few hours before making payment again.
Please contact to epay_query@gtu.edu.in mail-ID related to only payment issues.-[2rem]  ml-10"
        />
        <span className="  mad:ml-4 text-white text-[1rem] mt-1 ml-6 font-medium mad5:text-[1rem]">
          Artificium
        </span>
      </div>
      <span className="text-[1rem]  ml-[6rem] text-nb3 mt-3 mad:ml-12">
        I'm glad you like the name Cosmic Voyager! And I agree, it's a great
        name for a spaceship. As for the concept art, I have some new designs
        that might be more to your liking. Take a look at these images.
      </span>
      <span className="text-[1rem] ml-[6rem] text-nb3  mt-7 mad:ml-12">
        Here are a few concept arts that also might inspire you. Take a look!
      </span>
      <div className="flex flex-row ml-[6rem] mt-10 gap-7 mad:ml-12">
        <Image1 link="https://i.ibb.co/sP9Zd2P/Image.png" />

        <Image1 link="https://i.ibb.co/ZN1yDK7/Image.png" />
        <Image1 link="https://i.ibb.co/T2XF8G6/Image.png" />
      </div>
    </div>
  );
}
