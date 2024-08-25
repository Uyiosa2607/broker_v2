import NavBar from "./Navigation";
import Footer from "./Footer";
import { Separator } from "../ui/separator";
import { FaEdit } from "react-icons/fa";
import { BsPersonFillLock } from "react-icons/bs";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/store";
import { formatCurrency } from "@/lib/utils";
import { supabase } from "@/lib/supabase";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react";

export default function Profile() {
  const [user] = useAtom(userAtom);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function sendResetLink() {
    setLoading(true);
    if (email.length == 0) return alert("Please Enter your Email");
    try {
      const response = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${import.meta.env.VITE_DOMAIN_NAME}/reset-password`,
      });
      if (!response.error)
        return toast.success("Password reset Link has been sent to your email");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-200 w-screen">
      <NavBar />
      <Dialog>
        <section className="min-h-[90vh]">
          <div className="py-7 flex items-center justify-center">
            <img
              className="w-[100px] rounded-full h-[100px] object-cover"
              src={`https://azbgmygmtxilfilpngex.supabase.co/storage/v1/object/public/${user.img}`}
              alt="avatar"
            />
          </div>
          <div className="w-[98%] font-normal p-4 mb-10 rounded-lg bg-white mx-auto">
            <div className="flex items-center justify-between py-4">
              <p>{user.name}</p>
              <div className="flex items-center gap-1">
                <FaEdit />
                <p className="">Edit Profile</p>
              </div>
            </div>
            <Separator />
            <div className="flex items-center justify-between py-4">
              <p>Balance</p>
              <p className="font-semibold">{formatCurrency(user.balance)}</p>
            </div>
          </div>
          <div className="w-[98%] font-normal p-4 mb-10 rounded-lg bg-white mx-auto">
            <div className="flex items-center justify-between py-4">
              <p>Email</p>
              <p className="">{user.email}</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between py-4">
              <p>Phone</p>
              <p className="">{user.phone}</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between py-4">
              <p>Country</p>
              <p>{user.country}</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between py-4">
              <p>Gender</p>
              <p>{user.gender}</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between py-4">
              <p>City</p>
              <p>{user.city}</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between py-4">
              <p>Address</p>
              <p>{user.address}</p>
            </div>
          </div>

          <div className="w-[98%] p-4 rounded-lg mb-5 mx-auto bg-white ">
            <DialogTrigger className="flex w-full items-center justify-between">
              <p className="text-red-500 capitalize">change password</p>
              <BsPersonFillLock />
            </DialogTrigger>
          </div>
        </section>
        <DialogContent>
          <DialogDescription className="mt-2">
            Please your email to receive password reset Link
          </DialogDescription>
          <div>
            <Input
              placeholder="Enter Your Email"
              type="email"
              className="mb-4"
              onChange={(event) => setEmail(event.target.value)}
            />
            <Button onClick={sendResetLink} className="font-semibold">
              Send link &nbsp;{" "}
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Footer />
      <ToastContainer />
    </main>
  );
}
