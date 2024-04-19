import { motion } from "framer-motion";
import { IoShareSocial, IoChatbubbleOutline } from "react-icons/io5";
import { CiEdit, CiFolderOn } from "react-icons/ci";
import { Link } from "react-router-dom";

export default function Top() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col "
    >
      <nav className="flex flex-col mac:w-[20rem] mad2:w-[70rem] mad6:w-[59rem] bg-nb8 h-[11rem] rounded-lg mt-3 mr-2 ml-3">
        <div className="flex flex-row">
          <div className="flex flex-col ml-5 mt-5">
            <span className="text-xl text-white">Orbital Oddysey</span>
            <span className="text-xs text-nb3 mt-1">
              Marketing Campaign for a new TV series Launch
            </span>
          </div>
          <div className="flex flex-row absolute right-0 top-4 mt-2 mr-10">
            <img
              src="https://i.ibb.co/sKgmScn/Users.png"
              className="h-10"
              alt="User"
            />
            <IoShareSocial className="text-white mt-2 ml-7" size={20} />
            <CiEdit className="text-white mt-2 ml-7" size={20} />
          </div>
        </div>
        <div className="flex flex-row text-xl text-white ml-5  mt-[3rem]">
          <div className="flex flex-row hover:text-sg5">
            <span>
              <Link to="/">Artificium</Link>
            </span>
          </div>
          <Link to="/chat">
            <div className="flex flex-row hover:text-sg5">
              <IoChatbubbleOutline className="ml-5 mt-1" size={20} />
              <span className="ml-2">Chat</span>
            </div>
          </Link>
          <div className="flex flex-row">
            <CiFolderOn className="ml-5 mt-1" size={20} />
            <span className="ml-2">
              <Link to="/library">Library</Link>
            </span>
          </div>
        </div>
      </nav>
    </motion.div>
  );
}
