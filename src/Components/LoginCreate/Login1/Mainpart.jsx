import { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Authapi from "../../../Authapi"; // Import Authapi context

import Form from "./Form";

export default function Mainpart() {
  const authApi = useContext(Authapi);

  return (
    <div>
      {authApi.auth ? (
        <>
          <button className="text-white text-5xl">
            <Link to="/">Home</Link>
          </button>
        </>
      ) : (
        <>
          <div className="flex flex-col">
            <div>
              <img
                src="https://i.ibb.co/rfCS6JF/Logo.png"
                className="h-8 w-8 ml-5 mt-5 mad5:h-10 mad5:w-10 mad5:ml-10 mad5:mt-10 mad6:ml-6 mad6:mt-6"
                alt="Logo"
              />
              <div className="mad3:mt-40 mad4:ml-[4rem] mad5:mt-[12rem] mad5:ml-[6rem] mad6:mt-[7rem] mad6:ml-[2rem]">
                <Form />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
