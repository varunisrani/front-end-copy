import Input from "../Dashboard/Input";
import Top from "../Dashboard/Slidebar/Top";
import ImageChat1 from "./ImageChat1";

export default function Mainpart4() {
  return (
    <div className="topmain">
      <Top />
      <ImageChat1 />
      <div className="mt-[14rem]  mad1:mt-[11rem] mad2:mt-[11rem] mad:mr-10 flex justify-center items-center">
        <Input />
      </div>
    </div>
  );
}
