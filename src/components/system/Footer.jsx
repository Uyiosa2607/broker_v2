import { RiHomeGearFill } from "react-icons/ri";

export default function Footer() {
  return (
    <main className="sticky bottom-0 left-0 w-full bg-white text-zinc-900 p-2">
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <RiHomeGearFill className="text-2xl" />
          <p className="text-[10px]">Dashboard</p>
        </div>
      </div>
    </main>
  );
}
