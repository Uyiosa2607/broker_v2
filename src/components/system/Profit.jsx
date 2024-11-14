import { Separator } from "../ui/separator";
import { supabase } from "@/lib/supabase";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/store";
import { formatCurrency } from "@/lib/utils";
import NavBar from "./Navigation";

export default function Profit() {
  const [user] = useAtom(userAtom);
  const [profits, setProfit] = useState([]);

  useEffect(() => {
    async function getProfit() {
      try {
        const { error, data } = await supabase
          .from("Profits")
          .select("*")
          .order("created_at", { ascending: false })
          .eq("user_id", user.id);
        if (error) return console.log("something went wrong:", error);
        setProfit(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProfit();
  }, [user]);

  function formatDateTime(dateString) {
    const date = new Date(dateString);

    const dayOptions = { weekday: "short", day: "numeric", month: "long" };
    const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };

    const formattedDay = new Intl.DateTimeFormat("en-US", dayOptions).format(
      date
    );
    const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
      date
    );

    return `${formattedDay} at ${formattedTime}`;
  }

  return (
    <main className="bg-gray-100">
      <NavBar />
      <section className="min-h-screen w-[98%] mx-auto">
        <p className="capitalize text-center font-medium text-lg mb-3">
          Profit History
        </p>
        <div className="flex text-sm flex-col gap-4">
          {profits.length < 1 ? (
            <p className="text-center mt-[5rem]">No Profit records</p>
          ) : (
            profits.map((transaction, index) => (
              <div
                className={`p-4 flex flex-col gap-3 rounded-md shadow-md ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                }`}
                key={transaction.id}
              >
                <p className="capitalize font-medium">
                  Date:{" "}
                  <span className="text-zinc-800">
                    {formatDateTime(transaction.created_at)}
                  </span>
                </p>
                <Separator />
                <p className="capitalize font-medium">
                  Amount:{" "}
                  <span className="text-zinc-800">
                    {formatCurrency(transaction.amount)}
                  </span>
                </p>
                <Separator />
                <p className="capitalize font-medium">
                  Reference:{" "}
                  <span className="text-zinc-800">{transaction.id}</span>
                </p>
                <p
                  className={`w-full text-xs ${
                    transaction.status === "Paid out"
                      ? "bg-green-700"
                      : "bg-black"
                  } text-white text-center my-3`}
                >
                  {transaction.status}
                </p>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
