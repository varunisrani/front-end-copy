import Chat from "./Chat";
import Input from "./Input";
import Top from "./Slidebar/Top";

export default function Mainpart3() {
  return (
    <div className="topmain">
      <Top />
      <Chat />
      <div className="mt-5 mad2:mt-1 flex justify-center items-center">
        <Input />
      </div>
    </div>
  );
}
