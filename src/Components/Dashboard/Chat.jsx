import Rec from "./Rec";
// eslint-disable-next-line no-unused-vars
import { IoChatbubbleOutline } from "react-icons/io5";

export default function Chat() {
  return (
    <div className="flex flex-col bg-nb7 w-full  mad:flex mad:flex-col mt-10">
      <span className="text-white text-3xl text-center mt-5  ">
        Innovation Starter Pack
      </span>
      <span className="text-[1rem] text-nb3/80 text-center mt-5">
        Kickstart your innovation process with our comprehensive selection of
        predefined prompts.
      </span>
      <div className="chatmain">
        <Rec
          title="Creative Assets"
          text1="UI wireframe"
          text2="Brochure design"
          text3="Social media"
        />
        <Rec
          title="Developer Tools"
          text1="API Integration"
          text2="Test automation"
          text3="DB optimization"
        />
        <Rec
          title="Content Creation"
          text1="Product desc"
          text2="E-mail copy"
          text3="Whitepaper"
        />
        <Rec
          title="Idea Generation"
          text1="Hashtag ideas"
          text2="Brainstorming"
          text3="Trend analysis"
        />
      </div>
    </div>
  );
}
