import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Form4() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="Form"
    >
      <div>
        <img
          src="https://i.ibb.co/HTJBv0h/Users.png"
          className="ml-40 pl-5 mt-5 h-[5rem] mad5:h-[7rem] mad5:ml-[10rem]"
          alt="Users Icon"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex flex-col ml-20 pl-10 mt-10 "
      >
        <span className="text-4xl font-thin text-white mad5:text-5xl">
          Sophia, Kamil, Emily and 2,012
        </span>
        <span className="text-4xl font-thin text-white mad5:text-5xl">
          others are already here!
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="flex flex-col ml-20 pl-10 mt-3 text-nb3"
      >
        <span className="text-[1rem] font-thin mad5:text-xl mad5:mt-3">
          But... it looks like you don't have access
        </span>
        <span className="text-[1rem] font-thin mad5:text-xl">
          to this workspace.
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="ml-[10rem] pl-12 mt-10 "
      >
        <button className="w-[10rem] bg-sg5 text-[1rem] rounded-lg ml-10 py-3 font-medium mad5:text-xl mad5:w-[13rem] mad5:py-4 mad5:ml-[5rem]">
          <Link to="/create4">Access request</Link>
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="ml-[15rem] pl-1 mt-12"
      >
        <button className="w-[5rem] bg-nb6 text-nb3 text-[1rem] rounded-lg ml-10 py-2 mad5:text-xl mad5:ml-[6.8rem] ">
          Back
        </button>
      </motion.div>
    </motion.div>
  );
}
