import Form2 from "./Form2";

export default function Mainpart2() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row ml-5 mt-5">
        <img src="https://i.ibb.co/rfCS6JF/Logo.png" className="h-5 w-5  " />
        <span className="bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 bg-clip-text text-transparent ml-80 pl-40">
          Log In
        </span>
      </div>
      <img
        src="https://i.ibb.co/JHp56pq/Illustration.png"
        className="flex absolute top-0 right-0 h-1/2 w-1/4 mad:w-1/3 min-h-screen"
      />
      <Form2 />
      <div className="about">
        <span>Artificium.app © 2023</span>
        <span className="ml-80 pl-10">Privacy Policy</span>
      </div>
    </div>
  );
}
