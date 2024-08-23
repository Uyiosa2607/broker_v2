import NavBar from "./Navigation";
import Footer from "./Footer";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function Withdraw() {
  return (
    <main className="bg-gray-200 w-screen">
      <NavBar />
      <section className="flex h-screen justify-center">
        <section className="min-h-[90vh] relative flex top-[5vh]  justify-center w-screen">
          <div className="w-[50%] p-5 h-fit bg-white rounded-md">
            <h3 className="font-semibold text-center mb-5">Withdraw</h3>
            {/* <div className="my-5">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="BITCOIN">Bitcoin</SelectItem>
                  <SelectItem value="USDT">USDT TRC-20</SelectItem>
                </SelectContent>
              </Select>
            </div> */}
            <div className="mb-5">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                placeholder="Enter Wallet Adress"
                type="number"
              />
            </div>
            <div className="mb-5">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" placeholder="Enter Amount" type="number" />
            </div>
            <p className="mb-5 text-sm capitalize">
              avaliable balance :{" "}
              <span className="font-semibold capitalize">{"$404,432.00"}</span>
            </p>
            <Dialog>
              <DialogTrigger>
                <Button className="capitalize font-semibold bg-green-500 rounded-md">
                  proceed
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="p-4">
                  {/* <span>generated</span>
                  <p className="text-sm font-normal">
                    Send $75 worth of USDT TRC-20 to the wallet address.
                  </p>
                  <div>
                    <span>Barcode goes here!!</span>
                    <span>WALLET ADDRESS GOES HERE</span>
                    <Button>copy address</Button>
                  </div>

                  <p className="text-sm text-red-600">Have you made payment?</p>
                  <span>Upload Payment proof after payment</span> */}
                  <Button>Back to Dashboard</Button>
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