import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { updateUserBalance } from "@/lib/utils";
import Balance from "./Balance";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/store";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { formatCurrency } from "@/lib/utils";
import { supabase } from "@/lib/supabase";

const plans = [
  {
    plan_name: "value invest plan 1",
    total_profit: "10%",
    duration: 10,
    maximum: 100,
    minimum: 50,
  },
  {
    plan_name: "value invest plan 2",
    total_profit: "15%",
    duration: 15,
    maximum: 400,
    minimum: 150,
  },
  {
    plan_name: "value invest plan 3",
    total_profit: "20%",
    duration: 20,
    maximum: 1000,
    minimum: 500,
  },
  {
    total_profit: "30%",
    duration: 28,
    maximum: 6000,
    minimum: 1000,
    plan_name: "value invest plan 4",
  },
  {
    total_profit: "40%",
    duration: 32,
    maximum: 8000,
    minimum: 1500,
    plan_name: "value invest plan 5",
  },
  {
    total_profit: "60%",
    duration: 40,
    maximum: 25000,
    minimum: 2000,
    plan_name: "value invest plan 6",
  },
];

export default function Plans() {
  const [user] = useAtom(userAtom);
  const [value, setValue] = useState(0);

  const { toast } = useToast();

  async function handleBuyPlan(plan) {
    if (value === 0)
      return toast({
        variant: "destructive",
        title: "Amount not provided",
        description: "enter amount to invest",
      });
    if (value < plan.minimum || value > plan.maximum)
      return toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please check plan Limits",
      });
    if (value === 0)
      return toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please enter Amount",
      });
    if (value > user.balance)
      return toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Not enough Balance",
      });
    const updateBalance = await updateUserBalance(user.id, value, user.balance);
    if (updateBalance)
      try {
        await supabase.from("plans").insert({
          user_id: user.id,
          plan_name: plan.plan_name,
          duration: plan.duration,
          amount: value,
        });
      } catch (error) {
        console.log(error);
      }

    return toast({
      title: "Success",
      description: "Plan has been activated",
    });
  }

  return (
    <main className="bg-gray-200">
      {/* <NavBar /> */}
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
              <div className="flex  flex-col gap-5 mb-4">
                <p>
                  Daily returns: <span>{plan.total_profit}</span>
                </p>
                <p>
                  duration: <span>{plan.duration} Days</span>
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
                  onClick={() => handleBuyPlan(plan)}
                  className="bg-blue-900 text-center w-full rounded-md text-white"
                >
                  Buy
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
