import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoMdPerson, IoMdCash } from "react-icons/io";
import { MdGroups2, MdSavings } from "react-icons/md";
import { BsPersonFillLock } from "react-icons/bs";
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

export default function NavBar() {
  const [user] = useAtom(userAtom);

  const navigate = useNavigate();

  async function logOut() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  return (
    <main className="sticky w-full bg-zinc-800 text-gray-100 p-4 top-0 left-0 z-[900]">
      <Sheet>
        <div className="flex items-center justify-between">
          <div>
            <SheetTrigger asChild>
              <RxHamburgerMenu className="text-2xl font-bold" />
            </SheetTrigger>
          </div>
          <div>
            <h1 className="uppercase font-semibold">logo here</h1>
          </div>
          <div>
            <Avatar>
              <AvatarImage
                src={`https://azbgmygmtxilfilpngex.supabase.co/storage/v1/object/public/${user.img}`}
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <SheetContent className="p-0 overflow-y-scroll z-[9999]" side="left">
          <SheetHeader className="mb-4">
            <div className="flex items-center px-4 pt-4 gap-1">
              <Avatar>
                <AvatarImage
                  src={`https://azbgmygmtxilfilpngex.supabase.co/storage/v1/object/public/${user.img}`}
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="text-sm text-left font-semibold p-0 m-0">
                  {user.name}
                </p>
                <p className="text-sm">{user.email}</p>
              </div>
            </div>
          </SheetHeader>
          <div className="bg-zinc-800 px-4 text-white">
            <div>
              <p className="capitalize text-gray-200 py-3">total balance</p>
              <p className="text-2xl">
                $<span className="font-semibold">303,502.00</span>
              </p>
            </div>
            <div className="flex py-4 justify-between font-normal capitalize text-sm items-center">
              <Link to="/profile">
                <div className="flex items-center flex-col">
                  <IoMdPerson className="text-2xl mb-2" />
                  <p className="text-xs">Profile</p>
                </div>
              </Link>
              <Link to="/#">
                <div className="flex items-center flex-col">
                  <MdGroups2 className="text-2xl mb-2" />
                  <p className="text-xs">referals</p>
                </div>
              </Link>
              <Link to="/Profile">
                <div className="flex items-center flex-col">
                  <BsPersonFillLock className="text-2xl mb-2" />
                  <p className="text-xs">change password</p>
                </div>
              </Link>
              <Link to="/plans">
                <div className="flex items-center flex-col">
                  <MdSavings className="text-2xl mb-2" />
                  <p className="text-xs">plans</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="px-4">
            <h1 className="text-base pt-3 text-gray-500 mb-5">Transactions</h1>
            <div className="flex flex-col gap-4">
              <Link to="/deposit">
                <div className="flex cursor-pointer items-center gap-4">
                  <IoMdCash className="bg-zinc-800 text-4xl rounded-full p-1 text-white" />
                  <p>Deposit Funds</p>
                </div>
              </Link>
              <Separator />
              <Link to="/plans">
                <div className="flex cursor-pointer items-center gap-4">
                  <MdSavings className="bg-zinc-800 text-4xl rounded-full p-1 text-white" />
                  <p>buy plans</p>
                </div>
              </Link>
              <Separator />
              <Link to="/withdraw">
                <div className="flex cursor-pointer items-center gap-4">
                  <FaCreditCard className="bg-zinc-800 text-4xl rounded-full p-1 text-white" />
                  <p>withdraw funds</p>
                </div>
              </Link>
              <Separator />
              <Link to="/transactions">
                <div className="flex cursor-pointer items-center  gap-4">
                  <FaHistory className="bg-zinc-800 text-4xl rounded-full p-1 text-white" />
                  <p>transaction history</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="px-4 mt-2">
            <h1 className="text-base pt-3 text-gray-500 mb-5">Investment</h1>
            <div className="flex flex-col gap-4">
              <Link to="/profit">
                <div className="flex cursor-pointer items-center gap-4">
                  <FaFunnelDollar className="bg-zinc-800 text-4xl rounded-full p-1 text-white" />
                  <p>Profit History</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="px-4 mt-2">
            <h1 className="text-base pt-3 text-gray-500 mb-5">Support</h1>
            <div className="flex flex-col gap-4">
              <Link to="/support">
                <div className="flex cursor-pointer items-center gap-4">
                  <AiFillMessage className="bg-zinc-800 text-4xl rounded-full p-1 text-white" />
                  <p>Open Support Ticket</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="px-4 mt-2">
            <h1 className="text-base pt-3 text-gray-500 mb-3">Session</h1>
            <div className="flex flex-col gap-4">
              <div
                onClick={logOut}
                className="flex cursor-pointer items-center gap-4"
              >
                <FaSignOutAlt className="bg-zinc-800 text-4xl rounded-full p-1 text-white" />
                <p>Sign Out</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </main>
  );
}
