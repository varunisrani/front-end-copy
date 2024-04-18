import Form1 from "./Form1";

export default function Mainpart1() {
  return (
    <div className="flex flex-col ">
      <div>
        <img
          src="https://i.ibb.co/rfCS6JF/Logo.png"
          className="h-8 w-8 ml-5 mt-5 "
        />
        <div className="mad3:mt-[9rem] mad4:ml-[4rem]">
          <Form1 />
        </div>
      </div>
    </div>
  );
}
