import Input from "../Dashboard/Input";
import Top from "../Dashboard/Slidebar/Top";
import ImageChat from "./ImageChat";

export default function Mainpart5() {
  return (
    <div className="topmain">
      <Top />
      <ImageChat />
      <div className="mt-[14rem] mad1:mt-[10rem] mad2:mt-[10rem] flex justify-center items-center">
        <Input />
      </div>
    </div>
  );
}
