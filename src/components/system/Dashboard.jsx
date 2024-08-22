import NavBar from "./Navigation";
import { useEffect } from "react";
import { FaCreditCard } from "react-icons/fa";
import { MdSavings } from "react-icons/md";
import { IoMdCash } from "react-icons/io";

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
    <main className="h-screen mx-auto w-screen bg-gray-200">
      <NavBar />
      <div className="flex flex-col w-full relative h-[200px]">
        <div className="flex-1 bg-zinc-800 flex items-center justify-center"></div>
        <div className="flex-1 bg-gray-200 flex items-center justify-center"></div>
        <div className="absolute left-1/2 -translate-x-1/2 div-to-center container top-5  w-[95%]  bg-white p-5 rounded-lg">
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
    </main>
  );
}
