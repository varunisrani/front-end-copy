import Form1 from "./Form1";

export default function Mainpart1() {
  return (
    <div className="flex flex-col ">
      <div>
        <img
          src="https://i.ibb.co/rfCS6JF/Logo.png"
          className="h-8 w-8 ml-5 mt-5 mad5:h-10 mad5:w-10 mad5:ml-10 mad5:mt-10 mad6:ml-6 mad6:mt-6"
        />
        <div className="mad3:mt-[9rem] mad4:ml-[4rem] mad5:mt-[11rem] mad5:ml-[7rem] mad6:ml-8 mad6:mt-[5rem]">
          <Form1 />
        </div>
      </div>
    </div>
  );
}
