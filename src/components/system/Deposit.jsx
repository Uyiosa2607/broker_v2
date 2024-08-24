import NavBar from "./Navigation";
import Footer from "./Footer";
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

export default function Deposit() {
  return (
    <main className="bg-gray-200 ">
      <NavBar />
      <section className="min-h-[90vh] relative flex top-[5vh]  justify-center w-screen">
        <div className="w-[80%] md:w-[50%] p-5 h-fit bg-white rounded-md">
          <h3 className="font-semibold">Deposit</h3>
          <div className="my-5">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="BITCOIN">Bitcoin</SelectItem>
                <SelectItem value="USDT">USDT TRC-20</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="mb-5">
            <Input placeholder="Enter Amount" type="number" />
          </div>
          <p className="mb-5 text-sm capitalize">
            avaliable balance :{" "}
            <span className="font-semibold capitalize">{"$404,432.00"}</span>
          </p>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="capitalize font-semibold bg-green-500 rounded-md">
                proceed
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <div className="p-4">
                <FaCheckCircle className="h-[70px] w-[70px] text-green-600 " />
                <span>generated</span>
                <p className="text-sm font-normal">
                  Send $75 worth of USDT TRC-20 to the wallet address.
                </p>
                <div>
                  <span>Barcode goes here!!</span>
                  <span>WALLET ADDRESS GOES HERE</span>
                  <Button>copy address</Button>
                </div>

                <p className="text-sm text-red-600">Have you made payment?</p>
                <span>Upload Payment proof after payment</span>
                <Input type="file" />
                <Button>Submit payment</Button>
              </div>
              <AlertDialogAction>Upload</AlertDialogAction>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>
      <Footer />
    </main>
  );
}
