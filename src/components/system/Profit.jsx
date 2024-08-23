import NavBar from "./Navigation";
import Footer from "./Footer";
import { Separator } from "../ui/separator";

const transactions = [
  {
    date: "Wed, Jul 24, 2024 9:19 PM",
    type: "USDT TRC-20",
    amount: "$500",
    reference: "GIPS1s04895104s",
    status: "complete",
  },
  {
    date: "Wed, Jul 24, 2024 9:19 PM",
    type: "USDT TRC-20",
    amount: "$500",
    reference: "GIPS10489a5104s",
    status: "complete",
  },
  {
    date: "Wed, Jul 24, 2024 9:19 PM",
    type: "USDT TRC-20",
    amount: "$500",
    reference: "GIPS104895c104s",
    status: "pending",
  },
  {
    date: "Wed, Jul 24, 2024 9:19 PM",
    type: "USDT TRC-20",
    amount: "$500",
    reference: "GIPS1048s95104s",
    status: "complete",
  },
  {
    date: "Wed, Jul 24, 2024 9:19 PM",
    type: "USDT TRC-20",
    amount: "$500",
    reference: "GIPS10489510ds",
    status: "pending",
  },
];

export default function Profit() {
  return (
    <main className="bg-gray-100">
      <NavBar />
      <section className="min-h-screen w-[98%] mx-auto">
        <p className="capitalize font-medium text-lg pt-5 mb-4">
          Profit History
        </p>
        <div className="flex text-sm flex-col gap-4">
          {transactions.map((transaction, index) => (
            <div
              className={`p-4 flex flex-col gap-3 rounded-md shadow-md ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
              key={transaction.reference}
            >
              <p className="capitalize font-medium">
                Date: <span className="text-gray-400">{transaction.date}</span>
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
                <span className="text-gray-400">{transaction.reference}</span>
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
