import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCash } from "react-icons/io";
import { MdSavings } from "react-icons/md";
import {
  FaHistory,
  FaFunnelDollar,
  FaCreditCard,
  FaSignOutAlt,
} from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { Separator } from "../ui/separator";
import { supabase } from "@/lib/supabase";
import { useNavigate, Link } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/store";
import { formatCurrency } from "@/lib/utils";
import AvatarImg from "./Avatar";

export default function NavBar() {
  const [user] = useAtom(userAtom);

  const navigate = useNavigate();

  async function logOut() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  return (
    <main className="sticky w-full bg-zinc-800  text-gray-100 py-2 px-3 top-0 left-0 z-[900]">
      <Sheet>
        <div className="flex items-center justify-between">
          <div>
            <SheetTrigger asChild>
              <RxHamburgerMenu className="text-2xl font-bold" />
            </SheetTrigger>
          </div>
          <div>
            <h1 className="uppercase font-semibold"></h1>
          </div>
          <div>
            <Link to="/profile">
              <AvatarImg />
            </Link>
          </div>
        </div>
        <SheetContent className="p-0 overflow-y-scroll z-[9999]" side="left">
          <SheetHeader className="mb-3">
            <div className="flex items-center px-2 pt-2 gap-2">
              <AvatarImg />
              <div className="flex-1 w-[80%] justify-end flex flex-col ">
                <p className="text-sm text-right width-[98%] truncate font-semibold">
                  {user.name}
                </p>
                <p className="text-xs text-right w-[98%] truncate">
                  {user.email}
                </p>
              </div>
            </div>
          </SheetHeader>
          <div className="bg-zinc-800 px-2 pb-3 text-white">
            <div className="ml-4">
              <p className="capitalize text-gray-200 py-2">total balance</p>
              <p className="text-2xl">
                <span className="font-semibold">
                  {formatCurrency(user.balance)}
                </span>
              </p>
            </div>
          </div>
          <div className="px-4 text-sm">
            <h1 className="text-base pt-1 text-gray-500 mb-3">Transactions</h1>
            <div className="flex capitalize flex-col gap-4">
              <Link to="/deposit">
                <div className="flex hover:text-red-400 cursor-pointer items-center gap-2">
                  <IoMdCash className="bg-zinc-800 text-2xl rounded-full p-1 text-white" />
                  <p>Deposit Funds</p>
                </div>
              </Link>
              <Separator />
              <Link to="/plans">
                <div className="flex hover:text-red-400 cursor-pointer items-center gap-2">
                  <MdSavings className="bg-zinc-800 text-2xl rounded-full p-1 text-white" />
                  <p>buy plans</p>
                </div>
              </Link>
              <Separator />
              <Link to="/withdraw">
                <div className="flex hover:text-red-400 cursor-pointer items-center gap-2">
                  <FaCreditCard className="bg-zinc-800 text-2xl rounded-full p-1 text-white" />
                  <p>withdraw funds</p>
                </div>
              </Link>
              <Separator />
              <Link to="/transactions">
                <div className="flex hover:text-red-400 cursor-pointer items-center  gap-2">
                  <FaHistory className="bg-zinc-800 text-2xl rounded-full p-1 text-white" />
                  <p>transaction history</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="px-4 text-sm mt-2">
            <h1 className="text-base pt-1 text-gray-500 mb-3">Investment</h1>
            <div className="flex flex-col gap-2">
              <Link to="/profit">
                <div className="flex hover:text-red-400 cursor-pointer items-center gap-2">
                  <FaFunnelDollar className="bg-zinc-800 text-2xl rounded-full p-1 text-white" />
                  <p>Profit History</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="px-4 text-sm mt-2">
            <h1 className="text-base pt-1 text-gray-500 mb-3">Support</h1>
            <div className="flex flex-col  gap-2">
              <Link to="/support">
                <div className="flex hover:text-red-400 cursor-pointer items-center gap-2">
                  <AiFillMessage className="bg-zinc-800 text-2xl rounded-full p-1 text-white" />
                  <p>Open Support Ticket</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="px-4 text-sm mt-2">
            <h1 className="text-base pt-1 text-gray-500 mb-3">Session</h1>
            <div className="flex flex-col gap-2">
              <div
                onClick={logOut}
                className="flex hover:text-red-400 cursor-pointer items-center gap-2"
              >
                <FaSignOutAlt className="bg-zinc-800 text-2xl rounded-full p-1 text-white" />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </main>
  );
}
