import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Toaster } from "../ui/toaster";
import { useToast } from "@/hooks/use-toast";

export default function ForgetPassword() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  async function getResetLink(event) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");

    try {
      const response = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: import.meta.env.VITE_DOMAIN_NAME,
      });
      if (!response.error) {
        setLoading(false);
        return toast({
          description: "Password reset link has been sent to your email",
        });
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      return;
    }
  }

  return (
    <main className="bg-gray-200 w-screen min-h-screen">
      <div className="h-20 bg-gray-200"></div>
      <section>
        <div className="bg-white rounded-lg w-[90%] p-5 md:w-[70%] mx-auto h-[300px]">
          <form onSubmit={getResetLink} className="mt-10">
            <div className="flex mb-5 flex-col gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <Button type="submit" className="font-semibold w-full text-center">
              Request reset Link &nbsp;{" "}
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
            </Button>
          </form>
        </div>
      </section>
      <Toaster />
    </main>
  );
}
