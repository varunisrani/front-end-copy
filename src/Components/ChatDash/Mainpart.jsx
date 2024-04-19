import Chat from "./Chat";
import Top from "../Dashboard/Slidebar/Top";

export default function Mainpart() {
  return (
    <div className="topmain">
      <Top />
      <div className="topchat">
        <Chat />
      </div>
    </div>
  );
}
