import Chat from "./Chat";
import TopSlideBAr from "./TopSlideBAr";

export default function Mainpart() {
  return (
    <div className="topmain">
      <TopSlideBAr />
      <div className="topchat">
        <Chat />
      </div>
    </div>
  );
}
