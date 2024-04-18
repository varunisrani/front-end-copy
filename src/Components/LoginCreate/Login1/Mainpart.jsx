import Form from "./Form";

export default function Mainpart() {
  return (
    <div className="flex flex-col">
      <div>
        <img
          src="https://i.ibb.co/rfCS6JF/Logo.png"
          className="h-8 w-8 ml-5 mt-5 "
        />
        <div className="mad3:mt-40">
          <Form />
        </div>
      </div>
    </div>
  );
}
