import NavBar from "./Navigation";
import Footer from "./Footer";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const plans = [
  { total_profit: "10%", duration: "15 days", maximum: "100", minimum: "50" },
  { total_profit: "15%", duration: "15 days", maximum: "400", minimum: "100" },
  {
    total_profit: "20%",
    duration: "15 days",
    maximum: "1,000",
    minimum: "500",
  },
  {
    total_profit: "30%",
    duration: "20 days",
    maximum: "6,000",
    minimum: "1,000",
  },
  {
    total_profit: "40%",
    duration: "25 days",
    maximum: "8,000",
    minimum: "1,500",
  },
  {
    total_profit: "60%",
    duration: "30 days",
    maximum: "25,000",
    minimum: "2,000",
  },
  //   {
  //     total_profit: "70%",
  //     duration: "45 days",
  //     maximum: "60,000",
  //     minimum: "",
  //   },
];

export default function Plans() {
  return (
    <main className="bg-gray-200">
      <NavBar />
      <section className="mx-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div
              className="bg-white p-4 rounded-md flex flex-col justify-between h-full"
              key={index}
            >
              <p className="capitalize mb-3">Value invest plan {index + 1}</p>
              <div className="flex flex-col gap-2 mb-4">
                <p>
                  total profit: <span>{plan.total_profit}</span>
                </p>
                <p>
                  duration: <span>{plan.duration}</span>
                </p>
                <p>
                  minimum: <span>{plan.minimum}</span>
                </p>
                <p>
                  maximum: <span>{plan.maximum}</span>
                </p>
              </div>
              <div className="mb-4">
                <Input />
                <p className="text-xs">
                  available balance <span>$403,950.00</span>
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Button className="bg-red-500 rounded-md text-white">
                  buy
                </Button>
                <Button className="bg-green-500 rounded-md text-white">
                  reset
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
