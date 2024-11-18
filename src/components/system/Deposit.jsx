import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { FaCheckCircle } from "react-icons/fa";
import Balance from "./Balance";
import uploadFile from "@/lib/upload";
import { Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/store";
import { useToast } from "@/hooks/use-toast";
import NavBar from "./Navigation";

export default function Deposit() {
  const [method, setMethod] = useState("bitcoin");
  const [amount, setAmount] = useState(0);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user] = useAtom(userAtom);

  const { toast } = useToast();

  async function createDepositRecord(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await uploadFile(avatar, "screenshots/");
      if (!response) throw new Error("Image upload failed");

      await supabase.from("Transactions").insert([
        {
          method,
          amount,
          img: response.path,
          user_id: user.id,
        },
      ]);

      toast({
        title: "Completed",
        description: "Deposit processing",
      });
    } catch (error) {
      console.error("Error creating deposit record:", error);
      toast({
        title: "Error",
        description: "There was an issue with the deposit process.",
      });
    } finally {
      setLoading(false);
    }
  }

  function clickCopy() {
    let text;

    if (method === "usdt") {
      text = import.meta.env.VITE_USDT_ADDRESS;
    } else {
      text = import.meta.env.VITE_BITCOIN_ADDRESS;
    }

    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          description: "Address copied to clipboard",
        });
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  }

  return (
    <main className="bg-gray-200 ">
      {/* <NavBar /> */}
      <section className="min-h-[90vh] relative flex top-[5vh]  justify-center w-screen">
        <div className="w-[90%] md:w-[600px] p-4 md:p-5 h-fit bg-white rounded-md">
          <h3 className="font-semibold">Deposit</h3>
          <div className="my-3">
            <Select onValueChange={(value) => setMethod(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bitcoin">Bitcoin</SelectItem>
                <SelectItem value="usdt">USDT TRC-20</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-3">
            <Input
              onChange={(event) => setAmount(event.target.value)}
              placeholder="Enter Amount"
              type="number"
            />
          </div>
          <div className="flex mb-2 items-center gap-1">
            <p className="text-sm capitalize">avaliable balance:</p>
            <Balance />
          </div>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="capitalize font-semibold bg-green-500 rounded-md">
                proceed
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="z-[3000] w-[98%] p-2 rounded-lg md:w-[500px]">
              <div className="p-2 md:p-4 flex w-[96%] md:w-full mx-auto  flex-col items-center justify-center">
                <FaCheckCircle className="h-[50px] w-[50px] md:h-[70px] md:w-[70px] text-green-600 " />
                <span className="text-sm font-normal mb-2">Generated</span>
                <div className="flex items-center w-full mx-auto justify-center flex-col">
                  {method && (
                    <img
                      className="mb-2"
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${
                        method === "usdt"
                          ? import.meta.env.VITE_USDT_ADDRESS
                          : import.meta.env.VITE_BITCOIN_ADDRESS
                      }`}
                      alt="barcode"
                    />
                  )}

                  <span
                    onClick={clickCopy}
                    className="text-sm mb-2 w-[98%] mx-auto truncate text-ellipsis text-gray-700"
                  >
                    {method === "usdt"
                      ? import.meta.env.VITE_USDT_ADDRESS
                      : import.meta.env.VITE_BITCOIN_ADDRESS}
                  </span>
                  <span className="mb-5 text-red-500 text-xs">
                    Tap to Address to copy or scan barcode
                  </span>
                </div>
                <form
                  className="flex flex-col w-[98%] items-center mx-auto"
                  onSubmit={createDepositRecord}
                >
                  <p className="text-xs mb-2 text-red-600">
                    Have you made payment?
                  </p>
                  <span className="text-xs">
                    Upload Payment proof after payment
                  </span>
                  <Input
                    onChange={(event) => setAvatar(event.target.files[0])}
                    className="text-center mx-auto w-[98%] my-2"
                    type="file"
                    required
                  />
                  <Button
                    disabled={loading}
                    type="submit"
                    className="w-fit mx-auto"
                  >
                    Upload{" "}
                    {loading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                  </Button>
                </form>
              </div>
              <div className="w-[98%] mx-auto">
                <AlertDialogAction className="bg-green-600 w-[95%] mx-auto md:w-full">
                  Complete
                </AlertDialogAction>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>
    </main>
  );
}
