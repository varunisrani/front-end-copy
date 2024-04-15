import TopSlideBAr from "../ChatDash copy/TopSlideBAr";
import Chat from "./Chat";
import Input from "./Input";

export default function Mainpart3() {
  return (
    <div className="topmain">
      <TopSlideBAr />
      <Chat />
      <div className="topinput">
        <Input />
      </div>
    </div>
  );
}
