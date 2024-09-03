import NavBar from "./Navigation";
import Footer from "./Footer";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { updateUserBalance } from "@/lib/utils";
import Balance from "./Balance";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/store";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatCurrency } from "@/lib/utils";

const plans = [
  { total_profit: "10%", duration: "7 days", maximum: 100, minimum: 50 },
  { total_profit: "15%", duration: "10 days", maximum: 400, minimum: 150 },
  {
    total_profit: "20%",
    duration: "10 days",
    maximum: 1000,
    minimum: 500,
  },
  {
    total_profit: "30%",
    duration: "15 days",
    maximum: 6000,
    minimum: 1000,
  },
  {
    total_profit: "40%",
    duration: "25 days",
    maximum: 8000,
    minimum: 1500,
  },
  {
    total_profit: "60%",
    duration: "30 days",
    maximum: 25000,
    minimum: 2000,
  },
];

export default function Plans() {
  const [user] = useAtom(userAtom);
  const [value, setValue] = useState(0);

  async function handleBuyPlan(min, max) {
    if (value === 0) return alert("Please enter Amount");
    if (value < min || value > max)
      return toast.error("Please check Plan limits");
    if (value === 0) return alert("Please Enter amount");
    if (value > user.balance) return toast.error("Not enough Balance");
    const updateBalance = await updateUserBalance(user.id, value, user.balance);
    if (updateBalance) return toast.success("Plan has been activated");
  }

  return (
    <main className="bg-gray-200">
      <NavBar />
      <section className="mx-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div
              className="bg-white capitalize font-medium p-4 rounded-md flex flex-col justify-between h-full"
              key={index}
            >
              <p className="capitalize font-semibold mb-6">
                Value invest plan {index + 1}
              </p>
              <div className="flex flex-col gap-5 mb-4">
                <p>
                  total profit: <span>{plan.total_profit}</span>
                </p>
                <p>
                  duration: <span>{plan.duration}</span>
                </p>
                <p>
                  minimum: <span>{formatCurrency(plan.minimum)}</span>
                </p>
                <p>
                  maximum: <span>{formatCurrency(plan.maximum)}</span>
                </p>
              </div>
              <div className="mb-4">
                <Input
                  className="mb-2 text-base font-medium"
                  onChange={(event) => setValue(event.target.value)}
                  type="number"
                />
                <p className="text-xs">
                  available balance <Balance />
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Button
                  onClick={() => handleBuyPlan(plan.minimum, plan.maximum)}
                  className="bg-blue-900 text-center w-full rounded-md text-white"
                >
                  Buy
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <ToastContainer />
    </main>
  );
}
