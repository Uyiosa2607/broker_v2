import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

export default function Login() {
  return (
    <main className="bg-gray-200 w-screen">
      <section className="min-h-screen">
        <div className="w-[50%] relative top-[5vh] p-4 rounded-lg bg-white h-fit mx-auto">
          <form className="w-[600px] mt-[2rem] mx-auto">
            <div>
              <h4 className="capitalize text-center text-2xl mb-5 font-semibold">
                welcome back
              </h4>
            </div>
            <div className="mb-5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <Label htmlFor="password">password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Enter Your Password"
              />
            </div>
            <div className="flex items-center justify-between">
              <Button className="font-semibold bg-green-600 my-5">Login</Button>
              <span className="text-sm">Don&apos;t have an account?</span>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
