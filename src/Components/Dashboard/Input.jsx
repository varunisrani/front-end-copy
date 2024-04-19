import { CiMicrophoneOn } from "react-icons/ci";
import { FaFileMedical } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
export default function Input() {
  return (
    <div className="inputmain">
      <CiMicrophoneOn className="text-nb3 ml-2 mt-7" />
      <input
        type="text"
        className="input"
        placeholder="You can ask me anything! I am here to help."
      />
      <div className="flex flex-row absolute right-0 mr-10 mad6:absolute mad6:right-10">
        <FaFileMedical className="text-nb3 ml-[45rem] mt-7 " />
        <LuSend className="text-nb3 ml-8 mt-7 mac:mr-5 mad1:mr-3 mad2:mr-3" />
      </div>
    </div>
  );
}
