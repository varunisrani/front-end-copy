import Image3 from "./Image3";

export default function Images() {
  return (
    <div className="libraryimage">
      <span className="text-[1rem] text-white ml-5 mt-5 mad5:text-2xl">
        Captain Drake
      </span>
      <span className="text-xs text-nb4 ml-5 mr-2 mt-2 mad5:text-[1rem]">
        Natural born leader with years of experience in space exploration.
      </span>
      <div className="flex flex-row ml-5 mt-8 gap-2 mad5:ml-6">
        <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
        <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
        <Image3 link="https://i.ibb.co/Fnn9nNx/Image.png" />
      </div>
    </div>
  );
}
