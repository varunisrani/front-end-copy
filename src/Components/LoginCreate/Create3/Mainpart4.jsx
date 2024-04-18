import Form4 from "./Form4";

export default function Mainpart4() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row ml-5 mt-10">
        <img
          src="https://i.ibb.co/rfCS6JF/Logo.png"
          className="h-8 w-8 ml-5  "
        />
      </div>
      <img
        src="https://i.ibb.co/BNWRYbM/Illustration1.png"
        className="flex absolute top-0 right-0 h-1/2 w-1/1 min-h-screen"
      />
      <div className="mad3:mt-[4rem] mad4:ml-[3rem] mad5:mt-[10rem] mad5:ml-[9rem]">
        <Form4 />
      </div>
      <div className="about">
        <span>Artificium.app © 2023</span>
        <span className="ml-[37rem] pl-10 mad1:ml-[29rem] mad2:ml-[34rem] mad3:ml-[34rem] mad4:ml-[33rem] mad5:ml-[44rem]">
          Privacy Policy
        </span>
      </div>
    </div>
  );
}
