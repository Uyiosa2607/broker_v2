import NavBar from "./Navigation";
import Footer from "./Footer";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Deposit() {
  const [method, setMethod] = useState("Bitcoin");
  const [amount, setAmount] = useState(0);
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user] = useAtom(userAtom);

  async function createDepositRecord(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await uploadFile(avatar, "screenshots/");
      await supabase.from("Transactions").insert([
        {
          method,
          amount,
          img: response.fullPath,
          user_id: user.id,
        },
      ]);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    return toast.success("Deposit Submited");
  }

  return (
    <main className="bg-gray-200 ">
      <NavBar />
      <section className="min-h-[90vh] relative flex top-[5vh]  justify-center w-screen">
        <div className="w-[80%] md:w-[50%] p-5 h-fit bg-white rounded-md">
          <h3 className="font-semibold">Deposit</h3>
          <div className="my-5">
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
          <div className="mb-5">
            <Input
              onChange={(event) => setAmount(event.target.value)}
              placeholder="Enter Amount"
              type="number"
            />
          </div>
          <div className="flex mb-5 items-center gap-1">
            <p className="text-sm capitalize">avaliable balance :</p>
            <Balance />
          </div>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="capitalize font-semibold bg-green-500 rounded-md">
                proceed
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="z-[3000] w-[80%] rounded-lg md:w-fit">
              <div className="p-4 flex flex-col items-center justify-center">
                <FaCheckCircle className="h-[70px] w-[70px] text-green-600 " />
                <span className="text-sm font-normal mb-3">Generated</span>
                <p className="text-sm  font-semibold mb-3">
                  Send ${amount} Worth of{" "}
                  <span className="font-bold uppercase">{method}</span> to the
                  Wallet Address.
                </p>
                <div className="flex items-center flex-col">
                  {method && (
                    <img
                      className="mb-4"
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${
                        method === "usdt"
                          ? import.meta.env.VITE_USDT_ADDRESS
                          : import.meta.env.VITE_BITCOIN_ADDRESS
                      }`}
                      alt="barcode"
                    />
                  )}
                  <span className="text-sm text-gray-700">
                    {method === "usdt"
                      ? import.meta.env.VITE_USDT_ADDRESS
                      : import.meta.env.VITE_BITCOIN_ADDRESS}
                  </span>
                  <Button
                    variant="outline"
                    className="w-fit my-4 uppercase text-xs"
                  >
                    copy address
                  </Button>
                </div>
                <form
                  className="flex flex-col items-center justify-center"
                  onSubmit={createDepositRecord}
                >
                  <p className="text-xs mb-2 text-red-600">
                    Have you made payment?
                  </p>
                  <span className="text-sm">
                    Upload Payment proof after payment
                  </span>
                  <Input
                    onChange={(event) => setAvatar(event.target.files[0])}
                    className="text-center my-3"
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
              <AlertDialogAction className="bg-green-600">
                Complete
              </AlertDialogAction>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>
      <Footer />
      <ToastContainer />
    </main>
  );
}
