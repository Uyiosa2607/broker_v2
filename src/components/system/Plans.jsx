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
    plan_name: "starter growth",
    daily_return: 5,
    total_profit: 35,
    duration: 7,
    maximum: 10000,
    minimum: 2000,
  },
  {
    plan_name: "advanced growth",
    daily_return: 6,
    total_profit: 84,
    duration: 14,
    maximum: 25000,
    minimum: 5000,
  },
  {
    plan_name: "premium growth",
    daily_return: 7,
    total_profit: 147,
    duration: 21,
    maximum: 50000,
    minimum: 10000,
  },
  {
    plan_name: "elite growth",
    daily_return: 8,
    total_profit: 240,
    duration: 30,
    maximum: 100000,
    minimum: 20000,
  },
  {
    plan_name: "institutional growth",
    daily_return: 9,
    total_profit: 405,
    duration: 45,
    maximum: 250000,
    minimum: 50000,
  },
  {
    plan_name: "legacy wealth",
    daily_return: 10,
    total_profit: 600,
    duration: 60,
    maximum: 500000,
    minimum: 100000,
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
        description: "Enter amount to invest",
      });

    if (value < plan.minimum || value > plan.maximum)
      return toast({
        variant: "destructive",
        title: "Invalid amount",
        description: "Please check plan limits",
      });

    if (value > user.balance)
      return toast({
        variant: "destructive",
        title: "Insufficient balance",
        description: "Not enough balance",
      });

    const updateBalance = await updateUserBalance(
      user.id,
      value,
      user.balance
    );

    if (updateBalance) {
      try {
        const expectedProfit = (value * plan.total_profit) / 100;
        const totalReturn = value + expectedProfit;

        await supabase.from("plans").insert({
          user_id: user.id,
          plan_name: plan.plan_name,
          duration: plan.duration,
          amount: value,
          expected_profit: expectedProfit,
          total_return: totalReturn,
          daily_return: plan.daily_return,
          total_profit_percentage: plan.total_profit,
        });

        toast({
          title: "Success",
          description: "Plan has been activated",
        });
      } catch (error) {
        console.log(error);

        toast({
          variant: "destructive",
          title: "Something went wrong",
          description: "Failed to activate plan",
        });
      }
    }
  }

  return (
    <main className="bg-gray-200 min-h-screen py-6">
      <section className="mx-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans.map((plan, index) => {
            const expectedProfit =
              value >= plan.minimum && value <= plan.maximum
                ? (value * plan.total_profit) / 100
                : 0;

            const totalReturn = value + expectedProfit;

            return (
              <div
                className="bg-white capitalize font-medium p-5 rounded-xl flex flex-col justify-between h-full shadow-sm"
                key={index}
              >
                <div>
                  <p className="capitalize font-bold text-lg mb-6">
                    {plan.plan_name}
                  </p>

                  <div className="flex flex-col gap-4 mb-5 text-sm">
                    <p>
                      Daily returns:{" "}
                      <span className="font-semibold">
                        {plan.daily_return}%
                      </span>
                    </p>

                    <p>
                      Total profit:{" "}
                      <span className="font-semibold">
                        {plan.total_profit}%
                      </span>
                    </p>

                    <p>
                      Duration:{" "}
                      <span className="font-semibold">
                        {plan.duration} Days
                      </span>
                    </p>

                    <p>
                      Minimum:{" "}
                      <span className="font-semibold">
                        {formatCurrency(plan.minimum)}
                      </span>
                    </p>

                    <p>
                      Maximum:{" "}
                      <span className="font-semibold">
                        {formatCurrency(plan.maximum)}
                      </span>
                    </p>
                  </div>

                  <div className="mb-4">
                    <Input
                      className="mb-2 text-base font-medium"
                      onChange={(event) =>
                        setValue(Number(event.target.value))
                      }
                      type="number"
                      placeholder="Enter investment amount"
                    />

                    <p className="text-xs mb-3">
                      Available balance <Balance />
                    </p>

                    {value >= plan.minimum &&
                      value <= plan.maximum && (
                        <div className="bg-gray-100 rounded-md p-3 text-sm space-y-2">
                          <p>
                            Expected Profit:{" "}
                            <span className="font-semibold">
                              {formatCurrency(expectedProfit)}
                            </span>
                          </p>

                          <p>
                            Total Return:{" "}
                            <span className="font-semibold">
                              {formatCurrency(totalReturn)}
                            </span>
                          </p>
                        </div>
                      )}
                  </div>
                </div>

                <Button
                  onClick={() => handleBuyPlan(plan)}
                  className="bg-blue-900 hover:bg-blue-800 text-center w-full rounded-md text-white"
                >
                  Buy Plan
                </Button>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}