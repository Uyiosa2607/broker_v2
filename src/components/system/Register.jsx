import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { supabase } from "@/lib/supabase";
import uploadFile from "@/lib/upload";
import SelectCountries from "./Selectcountry";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "../ui/toaster";
import { useToast } from "@/hooks/use-toast";

export default function Register() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [avatar, setAvatar] = useState(undefined);
  const [loading, setLoading] = useState(false);

  function handleFile(event) {
    const imageFile = event.target.files[0];
    setAvatar(imageFile);
  }

  async function handleResgistration(event) {
    setLoading(true);
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const country = formData.get("country");
    const address = formData.get("address");
    const gender = formData.get("gender");
    const phone = formData.get("phone");

    try {
      const response = await supabase.auth.signUp({
        email,
        password,
      });

      if (response.error) {
        setLoading(false);
        return toast({
          variant: "destructive",
          title: "Something went wrong",
          description: response.error.message,
        });
      }
      const profileImageLink = await uploadFile(avatar, "profile_pictures/");

      await supabase.from("Users").insert([
        {
          id: response.data.user.id,
          name,
          email,
          phone,
          gender,
          country,
          address,
          img: profileImageLink.path,
        },
      ]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    toast({
      title: "Resgistration complete",
      message: "You can login with your credentials now",
    });
    navigate("/login");
    return setLoading(false);
  }

  return (
    <main className="h-screen bg-gray-200 w-screen">
      <section className="bg-inherit">
        <div className=" w-[90%] md:w-fit relative top-[1vh] p-3 md:p-5 rounded-lg bg-white h-fit mx-auto">
          <form
            onSubmit={handleResgistration}
            className="w-[95%] md:w-[600px] mt-[1rem] mx-auto"
          >
            <div>
              <h4 className="text-center text-2xl mb-3 font-semibold">
                Create an account
              </h4>
            </div>
            <div className="mb-3 flex flex-col gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="name"
                required
                placeholder="Firstname and Surname"
              />
            </div>
            <div className="mb-3 flex flex-col gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-3 flex flex-col gap-1.5">
              <Label htmlFor="password">password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Enter a Password"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
              <div className="flex flex-1 flex-col gap-1">
                <Label htmlFor="gender">Gender</Label>
                <Select name="gender" id="gender">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Gender</SelectLabel>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="mb-3 md:mb-3 flex-1 flex flex-col gap-1">
                <Label htmlFor="picture">Country</Label>
                <SelectCountries />
              </div>
            </div>
            <div className="flex md:items-center flex-col md:flex-row gap-5">
              <div className="mb-1 md:mb-3 flex-1 flex flex-col gap-1">
                <Label htmlFor="picture">Profile picture</Label>
                <Input
                  onChange={handleFile}
                  id="picture"
                  name="picture"
                  type="File"
                  required
                  placeholder="Select Photo"
                />
              </div>
              <div className="mb-3 flex-1 flex flex-col gap-1">
                <div className="mb-1md:mb-3 flex-1 flex flex-col gap-1">
                  <Label htmlFor="password">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="text"
                    required
                    placeholder="Enter Your Phone Number"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3 flex flex-col gap-1">
              <Label htmlFor="password">Address</Label>
              <Input
                id="address"
                name="address"
                type="text"
                required
                placeholder="Adress Here"
              />
            </div>
            <div className="flex items-center justify-between">
              <Button
                disabled={loading}
                type="submit"
                className="font-semibold w-full bg-green-600 my-3"
              >
                Register
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
              </Button>
            </div>
            <Link to="/login">
              <span className="text-xs underline">
                Already have an account?
              </span>
            </Link>
          </form>
        </div>
      </section>
      <Toaster />
    </main>
  );
}
