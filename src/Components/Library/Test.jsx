import RightMenu from "./RightMenu";

export default function Test() {
  return (
    <div className="flex flex-row h-screen w-full bg-black">
      <div className="absolute right-0">
        <RightMenu />
      </div>
    </div>
  );
}
