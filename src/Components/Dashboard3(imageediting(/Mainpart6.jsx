import Input from "../Dashboard/Input";
import Top from "../Dashboard/Slidebar/Top";
import ImageEditing from "./ImageEditing";

export default function Mainpart6() {
  return (
    <div className="topmain">
      <Top />
      <ImageEditing />
      <div className="topinput">
        <Input />
      </div>
    </div>
  );
}
