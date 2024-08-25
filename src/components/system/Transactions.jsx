import NavBar from "./Navigation";
import Footer from "./Footer";
import { Separator } from "../ui/separator";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/store";
import { supabase } from "@/lib/supabase";

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
                Date:{" "}
                <span className="text-gray-400">{transaction.created_at}</span>
              </p>
              <Separator />
              <p className="capitalize font-medium">
                Type: <span className="text-gray-400">{transaction.type}</span>
              </p>
              <Separator />
              <p className="capitalize font-medium">
                Amount:{" "}
                <span className="text-gray-400">{transaction.amount}</span>
              </p>
              <Separator />
              <p className="capitalize font-medium">
                Reference:{" "}
                <span className="text-gray-400">{transaction.id}</span>
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
