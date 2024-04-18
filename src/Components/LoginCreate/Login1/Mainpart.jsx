import Form from "./Form";

export default function Mainpart() {
  return (
    <div className="flex flex-col">
      <div>
        <img
          src="https://i.ibb.co/rfCS6JF/Logo.png"
          className="h-8 w-8 ml-5 mt-5 "
        />
        <div className="mad3:mt-40 mad4:ml-[4rem]">
          <Form />
        </div>
      </div>
    </div>
  );
}
