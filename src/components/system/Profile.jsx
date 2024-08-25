import NavBar from "./Navigation";
import Footer from "./Footer";
import { Separator } from "../ui/separator";
import { FaEdit } from "react-icons/fa";
import { BsPersonFillLock } from "react-icons/bs";
import { useAtom } from "jotai";
import { userAtom } from "@/lib/store";
import { formatCurrency } from "@/lib/utils";

export default function Profile() {
  const [user] = useAtom(userAtom);

  return (
    <main className="min-h-screen bg-gray-200 w-screen">
      <NavBar />
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
              <p className="">edit profile</p>
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
          <div className="flex items-center justify-between">
            <p className="text-red-500 capitalize">change password</p>
            <BsPersonFillLock />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
