import { Link } from "react-router-dom";
import Input from "./Input";

export default function Form2() {
  return (
    <div className="Form">
      <div className="flex flex-col">
        <span className="regtext">Connect with your team and bring you</span>
        <span className="regtext">creative ideas to life.</span>
      </div>
      <div className="reginput">
        <Input name="First Name" />
        <Input name="Last Name" />
      </div>
      <div className="reginput">
        <Input name="Password" />
        <Input name="Repeat Password" />
      </div>
      <div className="flex flex-row mt-5">
        {" "}
        <input type="checkbox" id="myCheckbox" name="myCheckbox " />
        <span className="text-xs text-nb3 ml-2">I agree with</span>
        <span className="text-xs ml-2 bg-gradient-to-r from-green-200 via-green-200 to-green-300 bg-clip-text text-transparent">
          Terms and conditions
        </span>
      </div>
      <button className="regaccount">
        <Link to="/create2">Create free account</Link>
      </button>
    </div>
  );
}
