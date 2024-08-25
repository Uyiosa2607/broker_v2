import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { supabase } from "@/lib/supabase";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  async function handleReset(event) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const password = formData.get("password");
    try {
      const response = await supabase.auth.updateUser({
        password: password,
      });
      if (!response.error) {
        toast.success("Password reset Succesfull");
        setLoading(false);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <main className="bg-gray-200 w-screen">
      <div className="h-8 bg-gray-200"></div>
      <section className="min-h-screen">
        <div className="bg-white w-[90%] p-5 mx-auto h-[300px] rounded-lg md:w-[70%]">
          <form className="w-[90%] mx-auto md:w-[600px]" onSubmit={handleReset}>
            <div className="flex my-5 mt-10 flex-col gap-2">
              <Label>New Password</Label>
              <Input
                id="password"
                placeholder="Enter password"
                required
                name="password"
                type="password"
              />
            </div>
            <Button type="submit" className="text-semibold text-white">
              Reset password&nbsp;{" "}
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
            </Button>
          </form>
        </div>
      </section>
      <ToastContainer />
    </main>
  );
}
