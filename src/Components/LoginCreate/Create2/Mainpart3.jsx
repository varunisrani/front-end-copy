import Form3 from "./Form3";

export default function Mainpart3() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row ml-5 mt-10">
        <img
          src="https://i.ibb.co/rfCS6JF/Logo.png"
          className="h-8 w-8 ml-5 mt-5 mad5:h-10 mad5:w-10 mad5:ml-5 mad5:mt-5 mad6:ml-3 mad6:mt-0"
        />
      </div>
      <img
        src="https://i.ibb.co/JHp56pq/Illustration.png"
        className="flex absolute top-0 right-0 h-1/2 w-1/1 mad:w-1/3 min-h-screen"
      />
      <div className="mad3:ml-[5rem] mad3:mt-[4rem] mad4:ml-[7rem] mad5:mt-[3rem] mad5:ml-[13rem] mad6:mt-[3rem]">
        <Form3 />
      </div>
      <div className="about">
        <span>Artificium.app © 2023</span>
        <span className="ml-[37rem] pl-10 mad1:ml-[29rem] mad2:ml-[34rem] mad3:ml-[34rem] mad4:ml-[42rem] mad5:ml-[56rem] mad6:ml-[16rem]">
          Privacy Policy
        </span>
      </div>
    </div>
  );
}
