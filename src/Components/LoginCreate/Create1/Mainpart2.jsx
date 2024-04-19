import Form2 from "./Form2";

export default function Mainpart2() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row ml-5 mt-10">
        <img
          src="https://i.ibb.co/rfCS6JF/Logo.png"
          className="h-8 w-8  mad5:h-10 mad5:w-10 mad5:ml-5 mad5:mt-2"
        />
        <span className="bg-gradient-to-r from-blue-500 via-blue-300 to-green-300 bg-clip-text text-transparent ml-[43rem] pl-40 mad1:[30rem] mad2:ml-[40rem] mad1:pl-10 text-xl mad3:ml-[40rem] mad4:ml-[48rem] mad5:ml-[63rem] mad5:text-xl">
          Log In
        </span>
      </div>
      <img
        src="https://i.ibb.co/JHp56pq/Illustration.png"
        className="flex absolute top-0 right-0 h-1/2 w-1/1 mad:w-1/3 min-h-screen"
      />
      <div className="mad3:mt-10 mad4:ml-[8rem] mad5:mt-[8rem] mad5:ml-[9rem]">
        <Form2 />
      </div>
      <div className="about">
        <span>Artificium.app © 2023</span>
        <span className="ml-[37rem] pl-10 mad1:ml-[29rem] mad2:ml-[34rem] mad3:ml-[34rem] mad4:ml-[42rem] mad5:ml-[56rem]">
          Privacy Policy
        </span>
      </div>
    </div>
  );
}
