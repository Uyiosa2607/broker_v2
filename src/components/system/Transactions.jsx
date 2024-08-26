import NavBar from "./Navigation";
import Footer from "./Footer";
import { Separator } from "../ui/separator";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/store";
import { supabase } from "@/lib/supabase";
import { formatCurrency } from "@/lib/utils";

function formatDateTime(dateString) {
  const date = new Date(dateString);

  // Options for formatting date and time components
  const dayOptions = { weekday: "short", day: "numeric", month: "long" };
  const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };

  // Format the day and time separately
  const formattedDay = new Intl.DateTimeFormat("en-US", dayOptions).format(
    date
  );
  const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
    date
  );

  // Combine into the desired format
  return `${formattedDay} at ${formattedTime}`;
}

export default function Transaction() {
  const [user] = useAtom(userAtom);

  const [transactions, setTransaction] = useState([]);

  useEffect(() => {
    async function getTransaction() {
      try {
        const response = await supabase
          .from("Transactions")
          .select("*")
          .eq("user_id", user.id);

        if (response.error)
          return console.log("Something went wrong", response.error);
        setTransaction(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getTransaction();
  }, [user]);

  return (
    <main className="bg-gray-100">
      <NavBar />
      <section className="min-h-screen w-[98%] mx-auto">
        <p className="capitalize font-medium text-lg pt-5 mb-4">
          Transaction History
        </p>
        <div className="flex text-sm flex-col gap-4">
          {transactions.map((transaction, index) => (
            <div
              className={`p-4 flex flex-col gap-3 rounded-md shadow-md ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
              key={transaction.id}
            >
              <p className="capitalize font-medium">
                Date :{" "}
                <span className="text-gray-700">
                  {formatDateTime(transaction.created_at)}
                </span>
              </p>
              <Separator />
              <p className="capitalize font-medium">
                Type :{" "}
                <span className="text-gray-700">
                  <span
                    className={`${
                      transaction.type === "deposit"
                        ? "bg-green-600 w-fit text-white px-1 rounded-md p-[3px]"
                        : "bg-red-500 w-fit text-white px-2 rounded-md p-[3px]"
                    }`}
                  >
                    {transaction.type}
                  </span>
                </span>
              </p>
              <Separator />
              <p className="capitalize font-medium">
                Amount :{" "}
                <span className="text-gray-700">
                  {formatCurrency(transaction.amount)}
                </span>
              </p>
              <Separator />
              <p className="capitalize font-medium">
                Reference :{" "}
                <span className="text-gray-700">{transaction.id}</span>
              </p>
              <p
                className={`w-full text-xs ${
                  transaction.status === "complete"
                    ? "bg-green-700"
                    : "bg-black"
                } text-white text-center my-3`}
              >
                {transaction.status}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
