import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (response.error) {
        setLoading(false);
        return toast.error("Invalid Login Credentials");
      }

      navigate("/dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <main className="bg-gray-200 w-screen">
      <section className="min-h-screen w-screen">
        <div className="w-[80%] md:w-fit relative top-[5vh] p-4 rounded-lg bg-white h-fit mx-auto">
          <form
            onSubmit={handleLogin}
            className="w-[95%] md:w-[600px] mt-[2rem] mx-auto"
          >
            <div>
              <h4 className="capitalize text-center text-2xl mb-3 font-semibold">
                welcome back
              </h4>
            </div>
            <div className="mb-3">
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
              <Button
                disabled={loading}
                className="font-semibold w-full bg-green-600 my-3"
              >
                Login &nbsp;
                {loading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <Link to="/register">
                <span className="text-xs underline">
                  Don&apos;t have an account?
                </span>
              </Link>
              <Link to="/forget-password">
                <span className="text-xs underline">forgot password?</span>
              </Link>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer />
    </main>
  );
}
