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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { AiFillMessage } from "react-icons/ai";
import { Separator } from "../ui/separator";
import { supabase } from "@/lib/supabase";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/store";
import { formatCurrency } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function NavBar() {
  const [user, setUser] = useAtom(userAtom);
  const navigate = useNavigate();

  async function fetchUser() {
    try {
      const getAuthStatus = await supabase.auth.getUser();
      const { data, error } = await supabase
        .from("Users")
        .select("*")
        .eq("id", getAuthStatus.data.user.id)
        .single();
      if (!error) {
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const sub = supabase
      .channel("two-tables-changes")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "Users" },
        (payload) => {
          fetchUser();
        }
      )
      .subscribe((status) => {
        if (status === "SUBSCRIBED") {
          console.log("Subscribed");
        } else if (status === "CHANNEL_ERROR") {
          console.error("Error subscribing to changes");
        }
      });
    return () => {
      supabase.removeChannel(sub);
    };
  }, []);

  async function logOut() {
    await supabase.auth.signOut();
    return navigate("/");
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
            <Link to="/user/profile">
              <Avatar className="w-[30px] h-[30px] md:h-[40px] md:w-[40px]">
                <AvatarImage
                  className="object-cover"
                  src={`https://azbgmygmtxilfilpngex.supabase.co/storage/v1/object/public/image_database/${
                    user.img
                  }?${Date.now().toString()}`}
                />
                <AvatarFallback>{user.name}</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
        <SheetContent className="p-0 overflow-y-scroll z-[9999]" side="left">
          <SheetHeader className="mb-3">
            <div className="flex items-center px-2 pt-2 gap-2">
              <Avatar className="w-[30px] h-[30px] md:h-[40px] md:w-[40px]">
                <AvatarImage
                  className="object-cover"
                  src={`https://azbgmygmtxilfilpngex.supabase.co/storage/v1/object/public/image_database/${
                    user.img
                  }?${Date.now().toString()}`}
                />
                <AvatarFallback>{user.name}</AvatarFallback>
              </Avatar>
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
              <Link to="/user/deposit">
                <div className="flex hover:text-red-400 cursor-pointer items-center gap-2">
                  <IoMdCash className="bg-zinc-800 text-2xl rounded-full p-1 text-white" />
                  <p>Deposit Funds</p>
                </div>
              </Link>
              <Separator />
              <Link to="/user/plans">
                <div className="flex hover:text-red-400 cursor-pointer items-center gap-2">
                  <MdSavings className="bg-zinc-800 text-2xl rounded-full p-1 text-white" />
                  <p>buy plans</p>
                </div>
              </Link>
              <Separator />
              <Link to="/user/withdraw">
                <div className="flex hover:text-red-400 cursor-pointer items-center gap-2">
                  <FaCreditCard className="bg-zinc-800 text-2xl rounded-full p-1 text-white" />
                  <p>withdraw funds</p>
                </div>
              </Link>
              <Separator />
              <Link to="/user/transactions">
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
              <Link to="/user/profit">
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
              <Link to="/user/support">
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
