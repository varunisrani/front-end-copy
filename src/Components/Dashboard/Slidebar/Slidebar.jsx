import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch, CiWallet, CiSettings } from "react-icons/ci";

export default function Slidebar() {
  return (
    <motion.nav
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="slidebar"
    >
      <div className="flex">
        <img
          src="https://i.ibb.co/Jd1C7Pt/Avatar.png"
          className="h-8 mt-6 ml-3"
          alt="Avatar"
        />
        <div className="flex flex-col mt-6 ml-2 text-xs/3 gap-1">
          <span className="flex text-white text-[1rem] ">Intellisys</span>
          <span className="flex text-sg5 ">12 members</span>
        </div>
        <FaAngleDown
          className="text-white mt-6 ml-[6rem] mad:ml-14"
          size={20}
        />
      </div>
      <div className="flex flex-col mt-8 ml-5 gap-5  text-[1rem]">
        <span className="text-nb3/60 text-xs/3">General</span>
        <div className="flex flex-row mt-3">
          <CiSearch className="text-white" />
          <span className="text-white ml-3">Search</span>
        </div>
        <div className="flex flex-row">
          <CiWallet className="text-white mt-1" />
          <span className="text-white ml-3">Billing</span>
        </div>
      </div>
      <div className="flex flex-col mt-8 ml-5 gap-5 text-xs/3">
        <span className="text-nb3">Projects</span>
        <div className="flex flex-row mt-5">
          <CiSearch className="text-white" />
          <span className="text-white ml-3 text-[0.9rem]">
            Digital Product Launch
          </span>
        </div>
        <div className="flex flex-row mt-2">
          <CiWallet className="text-white" size={15} />
          <span className="text-white ml-3 text-[0.9rem]">Brand Refresh</span>
        </div>
        <div className="flex flex-row mt-2">
          <CiSearch className="text-white" />
          <span className="text-white ml-3 text-[0.9rem]">
            Social Media Strategy
          </span>
        </div>
      </div>
      <div className="flex mt-12 absolute bottom-0 mb-10">
        <img
          src="https://i.ibb.co/MVfJNWW/Avatar.png"
          className="h-10 mt-3 ml-3"
          alt="Avatar"
        />
        <div className="flex flex-col mt-4 ml-2 text-xs/3 gap-1">
          <span className="flex text-white text-[1rem]">Ryan Lee</span>
          <span className="flex text-sg5 mt-2">Premium</span>
        </div>
        <CiSettings
          className="text-white mt-5 ml-[5rem] mad:ml-14 mad1:ml-[2rem]"
          size={20}
        />
      </div>
    </motion.nav>
  );
}
