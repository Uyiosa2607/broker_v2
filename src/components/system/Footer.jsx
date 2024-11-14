import { RiHomeGearFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <main className="sticky bottom-0 left-0 w-full bg-white text-zinc-900 p-2">
      <div className="flex items-center justify-center">
        <Link to="/user/dashboard">
          <div className="flex hover:text-red-500 flex-col items-center">
            <RiHomeGearFill className="text-2xl" />
            <p className="text-[10px]">Dashboard</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
