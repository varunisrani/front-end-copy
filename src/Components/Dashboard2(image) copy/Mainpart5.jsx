import Input from "../Dashboard/Input";
import Top from "../Dashboard/Slidebar/Top";
import ImageChat from "./ImageChat";

export default function Mainpart5() {
  return (
    <div className="topmain">
      <Top />
      <div className="mad3:mt-5 mad5:mt-[1rem]">
        <ImageChat />
      </div>
      <div className="mt-[9rem] mad6:mt-[9rem] mad1:mt-[11rem] mad2:mt-[11rem] mad3:mt-[13rem] mad:mr-10 flex justify-center items-center mad5:mt-[22rem]">
        <Input />
      </div>
    </div>
  );
}
