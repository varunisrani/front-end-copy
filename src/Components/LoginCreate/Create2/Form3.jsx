import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Form3() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="Form"
    >
      <div className="flex flex-col mt-12">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-4xl font-thin text-white mad5:text-5xl mad6:text-2xl"
        >
          Join or Create a Workspace
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-[1rem] text-nb3 mt-5 mad5:text-xl mad6:text-xs"
        >
          Connect with others by joining an existing workspace or create a new
          one to collaborate
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-[1rem] text-nb3 mad6:text-xs"
        >
          with your team.
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="flex flex-row mt-[4rem]"
        >
          <input
            className="px-10 w-[27rem] py-4 mad5:px-10 mad5:w-[30rem] mad5:py-7 mad5:text-xl mad6:w-[20rem] mad6:py-3 mad6:text-xs bg-nb6 text-[1rem] text-white rounded-lg"
            placeholder="Your workspace URL .artificium.app"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-[10rem] mad5:w-[15rem] bg-sg5 text-[1rem] px-2 font-medium rounded-lg ml-10 mad5:text-[1.2rem] mad6:text-[0.8rem]"
          >
            <Link to="/create3">Join Workspace</Link>
          </motion.button>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="w-[40rem] mad5:w-[48rem] mad5:py-5 mad6:w-[32.7rem] bg-nb6 text-[1rem] mad5:text-xl text-nb3 py-3 rounded-lg mt-20 mad6:text-[0.9rem]"
        >
          <Link to="/create3">Create new Workspace</Link>
        </motion.button>
      </div>
    </motion.div>
  );
}
