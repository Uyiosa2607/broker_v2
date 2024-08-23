import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";

export default function Register() {
  return (
    <main className="h-screen bg-gray-200 w-screen">
      <section className="bg-inherit">
        <div className="w-[50%] relative top-[2vh] p-4 rounded-lg bg-white h-fit mx-auto">
          <form className="w-[600px] mt-[2rem] mx-auto">
            <div>
              <h4 className="capitalize text-center text-2xl mb-5 font-semibold">
                Create an account
              </h4>
            </div>
            <div className="mb-5 flex flex-col gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="name"
                required
                placeholder="Firstname and Surname"
              />
            </div>
            <div className="mb-5 flex flex-col gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter Your Email"
              />
            </div>
            <div className="mb-5 flex flex-col gap-1.5">
              <Label htmlFor="password">password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Enter a Password"
              />
            </div>
            <div className="flex items-center gap-5">
              <div className="mb-5 flex-1 flex flex-col gap-1.5">
                <Label htmlFor="password">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="text"
                  required
                  placeholder="Enter Your Phone Number"
                />
              </div>
              <div className="mb-5 flex-1 flex flex-col gap-1.5">
                <Label htmlFor="password">Country</Label>
                <Input
                  id="country"
                  name="country"
                  type="text"
                  required
                  placeholder="Country"
                />
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="mb-5 flex-1 flex flex-col gap-1.5">
                <Label htmlFor="password">Profile picture</Label>
                <Input
                  id="picture"
                  name="picture"
                  type="File"
                  required
                  placeholder="Select Photo"
                />
              </div>
              <div className="mb-5 flex-1 flex flex-col gap-1.5">
                <Label htmlFor="password">Gender</Label>
                <Input
                  id="country"
                  name="gender"
                  type="text"
                  required
                  placeholder="Country"
                />
              </div>
            </div>
            <div className="mb-5 flex flex-col gap-1.5">
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
              <Button className="font-semibold bg-green-600 my-3">
                Register
              </Button>
              <span className="text-sm">Already have an account?</span>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
