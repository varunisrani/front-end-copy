import { CiMicrophoneOn } from "react-icons/ci";
import { FaFileMedical } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
export default function Input() {
  return (
    <div className="chatinputmain">
      <CiMicrophoneOn
        className="text-nb3 ml-2 mt-6 mad5:mt-[1.8rem] mad6:mt-5"
        size={20}
      />
      <input
        type="text"
        className="chatinput"
        placeholder="You can ask me anything! I am here to help."
      />
      <FaFileMedical
        className="text-nb3 ml-[31rem] mt-5 mad2:ml-[25rem] mad5:ml-[35rem] mad5:mt-[1.8rem] mad6:ml-[15rem] "
        size={20}
      />
      <LuSend
        className="text-nb3 ml-8 mt-5 mad1:mr-3 mad2:mr-3 mad5:mt-[1.8rem] mr-5"
        size={20}
      />
    </div>
  );
}
