import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import Authapi from "../../../Authapi";

export default function Form2() {
  const authApi = useContext(Authapi);
  const [name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/create", {
        firstName: name,
        email,
        password,
      });

      console.log(response.data); // Log or handle the response data as needed
      alert("Account created successfully!");
      navigate("/");
      authApi.setAuth(true);
    } catch (error) {
      console.error("Error creating account:", error);
      alert("Failed to create account. Please try again.");
    }
  };

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
          className="text-4xl mad5:text-5xl mad6:text-2xl font-thin text-white mad1:text-3xl "
        >
          Connect with your team and bring your
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-4xl  mad5:text-5xl mad6:text-2xl font-thin text-white mad1:text-3xl"
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
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-[20rem] mad5:w-[25rem] mad5:py-4 mad5:text-xl mad6:w-[13rem] mad6:py-3 mad6:text-xs px-2 py-3 bg-nb6 text-[0.9rem] text-white rounded-lg border border-gray-100/10"
            required
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            className="w-[20rem] mad5:w-[25rem] mad5:py-4 mad5:text-xl mad6:w-[13rem] mad6:py-3 mad6:text-xs px-2 py-3 bg-nb6 text-[0.9rem] text-white rounded-lg border border-gray-100/10"
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>
      </div>
      <div className="reginput">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[20rem] mad5:w-[25rem] mad5:py-4 mad5:text-xl mad6:w-[13rem] mad6:py-3 mad6:text-xs px-2 py-3 bg-nb6 text-[0.9rem] text-white rounded-lg border border-gray-100/10"
            required
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.7 }}
        className="flex flex-row mt-10"
      >
        <input type="checkbox" id="myCheckbox" name="myCheckbox" />
        <span className="text-[0.9rem] text-nb3 ml-2 mad5:text-xl mad5:w-[25rem] mad5:py-4 mad6:text-xs">
          I agree with
        </span>
        <span className="text-[0.9rem] ml-2 bg-gradient-to-r from-green-200 via-green-200 to-green-300 bg-clip-text text-transparent mad5:text-xl mad5:w-[25rem] mad5:py-4 mad6:text-xs">
          Terms and conditions
        </span>
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="bg-sg5 rounded-lg py-3 text-[1rem] font-medium w-[41rem] mad5:w-[51.4rem] mad5:text-xl mad5:py-4 mad6:w-[27.4rem] mad6:text-[0.8rem] mad6:py-2 mt-10"
        onClick={handleCreateAccount}
      >
        <Link to="/">Create free account</Link>
      </motion.button>
    </motion.div>
  );
}
