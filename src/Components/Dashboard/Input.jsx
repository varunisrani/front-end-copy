import { CiMicrophoneOn } from "react-icons/ci";
import { FaFileMedical } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";
export default function Input() {
  return (
    <div className="inputmain">
      <CiMicrophoneOn className="text-nb3 ml-2 mt-4" />
      <input
        type="text"
        className="input"
        placeholder="You can ask me anything! I am here to help."
      />
      <FaFileMedical className="text-nb3 ml-60 mt-4 " />
      <LuSend className="text-nb3 ml-8 mt-4 mac:mr-5" />
    </div>
  );
}
