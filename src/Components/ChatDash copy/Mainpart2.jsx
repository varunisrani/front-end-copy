import Top from "../Dashboard/Slidebar/Top";
import Chat from "./Chat";

export default function Mainpart2() {
  return (
    <div className="topmain">
      <Top />
      <div className="topchat">
        <Chat />
      </div>
    </div>
  );
}
