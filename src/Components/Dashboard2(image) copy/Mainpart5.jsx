import Input from "../Dashboard/Input";
import Top from "../Dashboard/Slidebar/Top";
import ImageChat from "./ImageChat";

export default function Mainpart5() {
  return (
    <div className="topmain">
      <Top />
      <div className="mad3:mt-5 mad5:mt-[7rem]">
        <ImageChat />
      </div>
      <div className="mt-[14rem]  mad1:mt-[11rem] mad2:mt-[12rem] mad3:mt-[18rem] mad:mr-10 flex justify-center items-center mad5:mt-[22rem]">
        <Input />
      </div>
    </div>
  );
}
