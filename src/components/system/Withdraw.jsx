import { useState } from "react";
import { userAtom } from "@/lib/store";
import { supabase } from "@/lib/supabase";
import { useAtom } from "jotai";
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
import { Loader2 } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { ShieldAlert } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Withdraw() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [user] = useAtom(userAtom);

  const { toast } = useToast();

  async function createWithdrawalRecord() {
    if (amount > user.balance)
      return toast({
        variant: "destructive",
        title: "An Error occured",
        description: "Not enough balance",
      });

    if (amount < 10000)
      return toast({
        variant: "destructive",
        title: "An Error occured",
        description: "Minimum withdrawal is $10,000",
      });

    setLoading(true);

    try {
      const response = await supabase.from("Transactions").insert([
        {
          type: "withdrawal",
          method: "Bitcoin",
          amount,
          user_id: user.id,
        },
      ]);

      await supabase
        .from("Users")
        .update({
          balance: Number(user.balance) - Number(amount),
        })
        .eq("id", user.id);

      if (response.error)
        return console.log("Something went wrong", response.error);
      toast({
        title: "Success",
        description: "withrawal request submited",
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="bg-gray-200 w-screen">
      {/* <NavBar /> */}
      <section className="flex h-screen justify-center">
        <section className="min-h-[90vh] relative flex top-[5vh]  justify-center w-screen">
          <div className=" w-[90%] md:w-[600px] p-4 md:p-5 h-fit bg-white rounded-md">
            <h3 className="font-semibold text-center mb-4">Withdraw</h3>
            <p className="text-blue-700 text-xs font-medium mb-3">
              Withdrawals are only paid out with Bitcoin
            </p>
            <div className="mb-3">
              <Label htmlFor="address">Address</Label>
              <Input
                onChange={(event) => setAddress(event.target.value)}
                id="address"
                placeholder="Enter Bitcoin Wallet Adress"
                type="text"
              />
            </div>
            <div className="mb-3">
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
              <DialogContent className="w-[95%] p-2 md:w-[500px] rounded-lg">
                <div className="flex w-[88%] md:w-[90%] md:mx-auto lg:w-full flex-col md:p-2">
                  <DialogDescription className="mb-4 text-zinc-900 font-medium">
                    <div className="w-full flex items-center justify-center my-3">
                      <ShieldAlert size={60} color="red" />
                    </div>
                    <p className="w-full break-words leading-5">
                      You are about withdrawing{" "}
                      <span className="font-medium text-red-600">
                        {formatCurrency(amount)}
                      </span>{" "}
                      to&nbsp;
                      <span className="text-red-600 text-center font-medium">
                        {address}
                      </span>
                    </p>
                    <Button
                      className="w-full mt-3 flex items-center justify-center bg-green-700 mx-auto text-sm"
                      onClick={createWithdrawalRecord}
                    >
                      Proceed{"  "}
                      {loading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : null}
                    </Button>
                  </DialogDescription>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </section>
    </main>
  );
}
