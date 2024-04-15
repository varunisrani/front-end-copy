import Form from "./Form";

export default function Mainpart() {
  return (
    <div className="flex flex-col">
      <div>
        <img
          src="https://i.ibb.co/rfCS6JF/Logo.png"
          className="h-5 w-5 ml-5 mt-5 "
        />
        <Form />
      </div>
    </div>
  );
}
