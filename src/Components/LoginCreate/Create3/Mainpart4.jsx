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
      <Form4 />
      <div className="about">
        <span>Artificium.app © 2023</span>
        <span className="ml-[37rem] pl-10 mad1:ml-[22rem]">Privacy Policy</span>
      </div>
    </div>
  );
}
