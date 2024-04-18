import Input from "../Dashboard/Input";
import Top from "../Dashboard/Slidebar/Top";
import ImageEditing from "./ImageEditing";

export default function Mainpart6() {
  return (
    <div className="topmain">
      <Top />
      <div className="mad3:mt-15">
        <ImageEditing />
      </div>
      <div className="flex justify-center items-center mad:flex mad:justify-center mad:items-center mad:mt-4 ">
        <Input />
      </div>
    </div>
  );
}
