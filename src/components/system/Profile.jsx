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
import { Loader2 } from "lucide-react";
import { Label } from "../ui/label";
import { FaCameraRetro } from "react-icons/fa";
import { Popover } from "../ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Toaster } from "../ui/toaster";
import { useToast } from "@/hooks/use-toast";
import imageCompression from "browser-image-compression";

export default function Profile() {
  const [user] = useAtom(userAtom);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address);
  const [uploading, setuploading] = useState(false);

  const { toast } = useToast();

  async function sendResetLink() {
    setLoading(true);
    if (email.length == 0)
      return toast({
        description: "Please enter your email",
      });
    try {
      const response = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: import.meta.env.VITE_DOMAIN_NAME,
      });
      if (!response.error) {
        toast({
          title: "Success",
          description: "A reset link has been sent to your email",
        });
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
    try {
      const response = await supabase
        .from("Users")
        .update({
          name: name,
          phone: phone,
          address: address,
        })
        .eq("id", user.id)
        .select();
      console.log(response);
      if (!response.error)
        return toast({
          title: "Success",
          description: "Profile Updated",
        });
      return toast.error("Something went wrong");
    } catch (error) {
      console.log(error);
    }
  }

  async function updateProfilePicture() {
    setuploading(true);
    if (avatar === null) {
      setuploading(false);
      return alert("Please select a photo");
    }
    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 800,
        useWebWorker: true,
      };
      const compressedImage = await imageCompression(avatar, options);
      const response = await supabase.storage
        .from("image_database")
        .update(`${user.img}`, compressedImage, {
          cacheControl: "3600",
          upsert: true,
          contentType: avatar.type,
        });
      if (!response.error) {
        setuploading(false);
        return toast({
          description: "Profile Photo updated",
        });
      }
      setuploading(false);
      return toast({
        variant: "destructive",
        description: "Something went wrong",
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  return (
    <main className="min-h-screen bg-gray-200 w-screen">
      <NavBar />
      <section className="p-0 min-h-screen">
        <div className="py-2 mb-3 flex flex-col items-center justify-center">
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
            <PopoverContent className="bg-zinc-800 py-6 rounded-lg w-[95%] md:w-[90%] lg:p-4 mx-auto text-white">
              <div className="p-4 flex flex-col items-center">
                {avatar && (
                  <img
                    className="w-[60px] mb-3 h-[60px] rounded-full object-cover"
                    src={URL.createObjectURL(avatar)}
                    alt="profile image"
                  />
                )}
                <form className="mb-2 flex flex-col gap-2">
                  <Input
                    className="mb-1 w-[120px]"
                    id="picture"
                    onChange={(event) => setAvatar(event.target.files[0])}
                    type="file"
                  />
                </form>
                {avatar && (
                  <Button
                    className="bg-green-700"
                    onClick={updateProfilePicture}
                  >
                    Change profile picture &nbsp;{" "}
                    {uploading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : null}
                  </Button>
                )}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="w-[98%] font-normal p-2 md:p-4 mb-3 rounded-lg bg-white mx-auto">
          <div className="flex items-center justify-between py-2">
            <Dialog>
              <p>{user.name}</p>
              <DialogTrigger>
                <div className="flex text-sm items-center gap-1">
                  <FaEdit />
                  <p className="">Edit Profile</p>
                </div>
              </DialogTrigger>
              <DialogContent className="w-[90%] rounded-lg md:w-[500px]">
                <form onSubmit={updateProfile} className="p-2 md:p-4">
                  <div className="flex mb-3 text-sm flex-col gap-2">
                    <Label>Name</Label>
                    <Input
                      onChange={(event) => setName(event.target.value)}
                      name="name"
                      type="text"
                      required
                      value={name}
                    />
                  </div>
                  <div className="flex mb-3 text-sm flex-col gap-2">
                    <Label>Phone</Label>
                    <Input
                      name="phone"
                      onChange={(event) => setPhone(event.target.value)}
                      required
                      value={phone}
                    />
                  </div>
                  <div className="flex mb-4  text-sm flex-col gap-2">
                    <Label>Address</Label>
                    <Input
                      onChange={(event) => setAddress(event.target.value)}
                      name="address"
                      type="text"
                      required
                      value={address}
                    />
                  </div>

                  <Button type="submit" className="text-sm font-semibold">
                    Update Profile
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <Separator />
          <div className="flex text-sm items-center justify-between py-2">
            <p>Balance</p>
            <p className="font-semibold">{formatCurrency(user.balance)}</p>
          </div>
        </div>
        <div className="w-[98%] text-sm font-normal p-2 mb-2 rounded-lg bg-white mx-auto">
          <div className="flex gap-10 items-center justify-between py-2">
            <p className="flex-1">Email</p>
            <p className="flex-1 text-right truncate">{user.email}</p>
          </div>
          <Separator />
          <div className="flex text-sm items-center justify-between py-2">
            <p>Phone</p>
            <p className="">{user.phone}</p>
          </div>
          <Separator />
          <div className="flex texe-sm items-center justify-between py-2">
            <p>Country</p>
            <p>{user.country}</p>
          </div>
          <Separator />
          <div className="flex texe-sm items-center justify-between py-2">
            <p>Gender</p>
            <p>{user.gender}</p>
          </div>
          <Separator />
          <div className="flex texe-sm items-center justify-between py-2">
            <p>City</p>
            <p>{user.city}</p>
          </div>
          <Separator />
          <div className="flex text-sm  gap-4 items-center justify-between py-2">
            <p className="flex-1">Address</p>
            <p className="flex-1 text-right truncate">{user.address}</p>
          </div>
        </div>
        <div className="w-[98%] mt-2 p-2 rounded-lg mb-2 bg-white mx-auto">
          <Dialog>
            <DialogTrigger className="flex text-sm w-full items-center justify-between">
              <p className="text-red-500 capitalize">change password</p>
              <BsPersonFillLock />
            </DialogTrigger>
            <DialogContent>
              <DialogDescription className="mt-2 text-sm">
                Please enter your email to receive password reset Link
              </DialogDescription>
              <div>
                <Input
                  placeholder="Enter Your Email"
                  type="email"
                  className="mb-3"
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
        </div>
      </section>
      <Footer />
      <Toaster />
    </main>
  );
}
