import NavBar from "./Navigation";
import { useEffect } from "react";
import { FaCreditCard } from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { Link } from "react-router-dom";
import TradingViewWidget from "./Trading";
import Footer from "./Footer";
import { useAtom } from "jotai";
import { totalAtom, userAtom } from "@/lib/store";
import { formatCurrency } from "@/lib/utils";
import { sumTransactionsByUser } from "@/lib/utils";

export default function Dashboard() {
  const [user] = useAtom(userAtom);
  const [total, setTotal] = useAtom(totalAtom);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js";
    script.async = true;
    document.body.appendChild(script);

    const balances = sumTransactionsByUser(user.id);
    setTotal(balances);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="mx-auto w-screen bg-gray-200">
      <NavBar />
      <div className="flex flex-col mt-4 w-full">
        <div className="w-[98%] mx-auto bg-white p-5 rounded-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="capitalize flex flex-col gap-2">
              <p className="text-gray-600 text-sm md:text-base text-medium mb-2">
                avaliable balance
              </p>
              <p className="text-xl md:text-2xl font-semibold">
                <span className="font-bold">
                  {formatCurrency(user.balance)}
                </span>
              </p>
            </div>
            <div className="capitalize flex flex-col gap-1">
              <p className="text-sm text-red-500 capitalize">server time</p>
              <p className="text-sm">Date</p>
              <p className="text-sm">time of the day</p>
            </div>
          </div>
          <div>
            <gecko-coin-price-marquee-widget
              locale="en"
              outlined="true"
              coin-ids="bitcoin,ethereum,dogecoin"
              initial-currency="usd"
            ></gecko-coin-price-marquee-widget>
          </div>
          <div className="flex justify-between  text-white items-center w-[80%] md:w-[60%] mx-auto py-4">
            <Link to="/deposit">
              <div className="flex flex-col mt-4 items-center">
                <FaCreditCard className="h-[45px] w-[45px]  md:w-[50px] p-2 rounded-md bg-red-500 md:h-[50px]" />
                <p className="text-zinc-900 mt-2 text-xs">deposit</p>
              </div>
            </Link>
            <Link to="/withdraw">
              <div className="flex flex-col items-center">
                <IoMdCash className="h-[45px] w-[45px] md:w-[50px] p-2 rounded-md bg-green-500 md:h-[50px]" />
                <p className="text-zinc-900 mt-2 text-xs">withdraw</p>
              </div>
            </Link>
            <Link to="/plans">
              <div className="flex flex-col  items-center">
                <MdSavings className="h-[45px] w-[45px] md:w-[50px] p-2 rounded-md bg-zinc-900 md:h-[50px]" />
                <p className="text-zinc-900 mt-2 text-xs">buy plan</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4 w-[98%] flex mx-auto gap-4">
        <div className="flex-1 p-5 font-medium bg-white rounded-lg">
          <p className="capitalize text-gray-400 mb-3">total deposits</p>
          <p className="text-base font-semibold">
            {formatCurrency(total.totalDeposits)}
          </p>
        </div>
        <div className="flex-1 font-medium bg-white rounded-lg p-5">
          <p className="capitalize mb-3 text-gray-400">total withdraws</p>
          <p className="text-base font-semibold">
            {formatCurrency(total.totalWithdrawals)}
          </p>
        </div>
      </div>
      <section className="w-[98%] p-2 bg-white rounded-lg mb-4 mt-4 mx-auto">
        <div>
          <p className="font-medium mb-2 pl-4">Referal Link</p>
          <p className="text-gray-400 text-sm pl-5">
            Get Bonus when someone register on Invex Capitals with your referral
            link
          </p>
          {/* Referal Stuffs goes here */}
        </div>
        <div className="mt-2 mb-4">
          <p className="text-red-600 pl-6">
            Referal program is currently suspended
          </p>
        </div>
        <TradingViewWidget />
      </section>
      <Footer />
    </main>
  );
}
