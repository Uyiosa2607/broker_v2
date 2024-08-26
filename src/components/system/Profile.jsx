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
import { Label } from "../ui/label";
import { FaCameraRetro } from "react-icons/fa";
import { Popover } from "../ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

export default function Profile() {
  const [user] = useAtom(userAtom);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);

  console.log(user);

  async function sendResetLink() {
    setLoading(true);
    if (email.length == 0) return alert("Please Enter your Email");
    try {
      const response = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: import.meta.env.VITE_DOMAIN_NAME,
      });
      if (!response.error) {
        toast.success("Password reset Link has been sent to your email");
        setLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setLoading(false);
  }

  async function updateProfile(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const address = formData.get("address");

    try {
      const response = await supabase
        .form("Users")
        .update([
          {
            name,
            phone,
            address,
          },
        ])
        .eq("id", user.id);
      if (!response.error) return toast.success("Profile Updated");
      return toast.error("Something went wrong");
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProfilePicture() {
    if (avatar === null) return alert("Please select a photo");
    try {
      const response = await supabase.storage
        .from("image_database")
        .update(`${user.img}`, avatar, {
          cacheControl: "3600",
          upsert: true,
          contentType: avatar.type,
        });
      if (!response.error) return toast.success("Profile picture Updated");
      return toast.error("Something went wrong, Please try again");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main className="min-h-screen bg-gray-200 w-screen">
      <NavBar />
      <section className="min-h-[90vh]">
        <div className="py-7 flex flex-col items-center justify-center">
          <img
            className="w-[100px] rounded-full h-[100px] object-cover"
            src={`https://azbgmygmtxilfilpngex.supabase.co/storage/v1/object/public/image_database/${
              user.img
            }?${new Date().getTime()}`}
            alt="avatar"
          />
          <Popover>
            <PopoverTrigger>
              <FaCameraRetro className="bottom-1" />
            </PopoverTrigger>
            <PopoverContent className="bg-zinc-800 py-10  rounded-lg md:w-fit mx-auto text-white">
              <div className="p-4 flex flex-col items-center">
                {avatar && (
                  <img
                    className="w-[60px] mb-5 h-[60px] rounded-full object-cover"
                    src={URL.createObjectURL(avatar)}
                    alt="profile image"
                  />
                )}
                <form className="mb-5 flex flex-col gap-2">
                  <Input
                    className="mb-5 w-[120px]"
                    id="picture"
                    onChange={(event) => setAvatar(event.target.files[0])}
                    type="File"
                  />
                </form>
                <Button className="bg-green-700" onClick={updateProfilePicture}>
                  Change profile picture
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="w-[98%] font-normal p-4 mb-10 rounded-lg bg-white mx-auto">
          <Dialog>
            <div className="flex items-center justify-between py-4">
              <p>{user.name}</p>
              <DialogTrigger>
                <div className="flex items-center gap-1">
                  <FaEdit />
                  <p className="">Edit Profile</p>
                </div>
              </DialogTrigger>
            </div>
            <DialogContent>
              <form onSubmit={updateProfile} className="p-4">
                <div className="flex mb-5 flex-col gap-2">
                  <Label>Name</Label>
                  <Input name="name" type="text" required value={user.name} />
                </div>
                <div className="flex mb-5 flex-col gap-2">
                  <Label>Phone</Label>
                  <Input name="phone" required value={user.phone} />
                </div>
                <div className="flex mb-5 flex-col gap-2">
                  <Label>Address</Label>
                  <Input
                    name="address"
                    type="text"
                    required
                    value={user.address}
                  />
                </div>

                <Button type="submit" className="font-semibold">
                  Update Profile
                </Button>
              </form>
            </DialogContent>
          </Dialog>
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
        <Dialog>
          <div className="w-[98%] p-4 rounded-lg mb-5 mx-auto bg-white ">
            <DialogTrigger className="flex w-full items-center justify-between">
              <p className="text-red-500 capitalize">change password</p>
              <BsPersonFillLock />
            </DialogTrigger>
          </div>
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
      </section>
      <Footer />
      <ToastContainer />
    </main>
  );
}
