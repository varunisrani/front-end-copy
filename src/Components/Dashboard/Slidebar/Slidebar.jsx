import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
export default function Slidebar() {
  return (
    <nav className="slidebar">
      <div className="flex">
        <img
          src="https://i.ibb.co/Jd1C7Pt/Avatar.png"
          className="h-8 mt-3 ml-3"
        />
        <div className="flex flex-col mt-4 ml-2 text-xs/3 gap-1">
          <span className="flex text-white">Intellisys</span>
          <span className="flex text-sg5">12 members</span>
        </div>
        <FaAngleDown className="text-white mt-5 ml-3 mad:ml-14" />
      </div>
      <div className="flex flex-col mt-5 ml-5 gap-5 text-xs/3">
        <span className="text-nb3">General</span>
        <div className="flex flex-row">
          <CiSearch className="text-white" />
          <span className="text-white ml-3">Search</span>
        </div>
        <div className="flex flex-row">
          <CiWallet className="text-white" />
          <span className="text-white ml-3">Billing</span>
        </div>
      </div>
      <div className="flex flex-col mt-8 ml-5 gap-5 text-xs/3">
        <span className="text-nb3">Projects</span>
        <div className="flex flex-row mt-5">
          <CiSearch className="text-white" />
          <span className="text-white ml-3">Digital Product Launch</span>
        </div>
        <div className="flex flex-row">
          <CiWallet className="text-white" />
          <span className="text-white ml-3">Brand Refresh</span>
        </div>
        <div className="flex flex-row">
          <CiSearch className="text-white" />
          <span className="text-white ml-3">Social Media Strategy</span>
        </div>
      </div>
      <div className="flex mt-12 absolute bottom-0 mb-10">
        <img
          src="https://i.ibb.co/MVfJNWW/Avatar.png"
          className="h-8 mt-3 ml-3"
        />
        <div className="flex flex-col mt-4 ml-2 text-xs/3 gap-1">
          <span className="flex text-white">Ryan Lee</span>
          <span className="flex text-sg5">Premium</span>
        </div>
        <CiSettings className="text-white mt-5 ml-6 mad:ml-14" />
      </div>
    </nav>
  );
}
