import NavBar from "./Navigation";
import { useEffect } from "react";
import { FaCreditCard } from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import TradingViewWidget from "./Trading";

export default function Dashboard() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js";
    script.async = true;
    document.body.appendChild(script);

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
              <p>avaliable balance</p>
              <p className="text-lg font-medium">
                $ <span className="text-2xl font-semibold">400,345.00</span>
              </p>
            </div>
            <div className="capitalize flex flex-col gap-2">
              <p>server time</p>
              <p>time of the day</p>
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
          <div className="flex justify-between text-white items-center w-[60%] mx-auto py-4">
            <div className="flex flex-col items-center">
              <FaCreditCard className="w-[50px] p-2 rounded-md bg-red-500 h-[50px]" />
              <p className="text-zinc-900">deposit</p>
            </div>
            <div className="flex flex-col items-center">
              <IoMdCash className="w-[50px] p-2 rounded-md bg-green-500 h-[50px]" />
              <p className="text-zinc-900">withdraw</p>
            </div>
            <div className="flex flex-col  items-center">
              <MdSavings className="w-[50px] p-2 rounded-md bg-zinc-900 h-[50px]" />
              <p className="text-zinc-900">buy plan</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 w-[98%] flex mx-auto gap-4">
        <div className="flex-1 p-5 bg-white rounded-lg">
          <p className="capitalize">total deposits</p>
          <p>$303,401.00</p>
        </div>
        <div className="flex-1 bg-white rounded-lg p-5">
          <p>total withdraws</p>
          <p>$32,000.00</p>
        </div>
      </div>
      <section className="w-[98%] p-2 bg-white rounded-lg mb-4 mt-4 mx-auto">
        <div>
          <p className="font-medium mb-2 pl-4">Referal Link</p>
          <p className="text-gray-400 pl-5">
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
    </main>
  );
}
