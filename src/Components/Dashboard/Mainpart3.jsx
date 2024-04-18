import Chat from "./Chat";
import Input from "./Input";
import Top from "./Slidebar/Top";

export default function Mainpart3() {
  return (
    <div className="topmain">
      <Top />
      <div className="mad3:mt-10 mad5:mt-20">
        <Chat />
      </div>
      <div className="mt-5 mad2:mt-5 mad3:mt-20 flex justify-center items-center mad5:mt-40">
        <Input />
      </div>
    </div>
  );
}
