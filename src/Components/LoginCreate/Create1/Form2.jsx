import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Input from "./Input";

export default function Form2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="Form"
    >
      <div className="flex flex-col">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="regtext"
        >
          Connect with your team and bring your
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="regtext"
        >
          creative ideas to life.
        </motion.span>
      </div>
      <div className="reginput">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Input name="First Name" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <Input name="Last Name" />
        </motion.div>
      </div>
      <div className="reginput">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Input name="Password" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
        >
          <Input name="Repeat Password" />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="flex flex-row mt-10"
      >
        <input type="checkbox" id="myCheckbox" name="myCheckbox" />
        <span className="text-[0.9rem] text-nb3 ml-2">I agree with</span>
        <span className="text-[0.9rem] ml-2 bg-gradient-to-r from-green-200 via-green-200 to-green-300 bg-clip-text text-transparent">
          Terms and conditions
        </span>
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="regaccount"
      >
        <Link to="/create2">Create free account</Link>
      </motion.button>
    </motion.div>
  );
}
