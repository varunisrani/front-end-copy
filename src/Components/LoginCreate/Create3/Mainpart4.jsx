import Form4 from "./Form4";

export default function Mainpart4() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row ml-5 mt-5">
        <img src="https://i.ibb.co/rfCS6JF/Logo.png" className="h-5 w-5  " />
      </div>
      <img
        src="https://i.ibb.co/BNWRYbM/Illustration1.png"
        className="flex absolute top-0 right-0 h-1/2 w-1/3 min-h-screen"
      />
      <Form4 />
      <div className="about">
        <span>Artificium.app © 2023</span>
        <span className="ml-60 pl-10">Privacy Policy</span>
      </div>
    </div>
  );
}
