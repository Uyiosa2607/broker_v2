import NavBar from "./Navigation";
import Footer from "./Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Balance from "./Balance";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function Withdraw() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <main className="bg-gray-200 w-screen">
      <NavBar />
      <section className="flex h-screen justify-center">
        <section className="min-h-[90vh] relative flex top-[5vh]  justify-center w-screen">
          <div className=" w-[80%] md:w-[50%] p-5 h-fit bg-white rounded-md">
            <h3 className="font-semibold text-center mb-5">Withdraw</h3>
            <p className="text-gray-700 text-sm font-medium mb-3 text-center">
              Withdrawals are only paid out with Bitcoin
            </p>
            <div className="mb-5">
              <Label htmlFor="address">Address</Label>
              <Input
                onChange={(event) => setAddress(event.target.value)}
                id="address"
                placeholder="Enter Bitcoin Wallet Adress"
                type="text"
              />
            </div>
            <div className="mb-5">
              <Label htmlFor="amount">Amount</Label>
              <Input
                onChange={(event) => setAmount(event.target.value)}
                id="amount"
                placeholder="Enter Amount"
                type="number"
              />
            </div>
            <div className="flex items-center mb-3 gap-1">
              <p className="text-sm capitalize">Avaliable balance :</p>
              <Balance />
            </div>
            <Dialog>
              <DialogTrigger>
                <Button
                  disabled={loading}
                  className="capitalize w-fit mx-auto font-semibold bg-green-500 rounded-md"
                >
                  proceed
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="p-4">
                  <DialogDescription className="mb-4 text-zinc-900 font-medium">
                    Proceed to Withdraw ${amount} to {address}
                  </DialogDescription>
                  <Button>
                    Complete withdrawal
                    {loading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </section>
      <Footer />
    </main>
  );
}
