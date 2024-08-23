import NavBar from "./Navigation";
import Footer from "./Footer";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <main className="bg-gray-200 w-screen">
      <NavBar />
      <section className="h-screen">
        <div className="w-[70%] mt-[2rem] p-4 rounded-lg bg-white h-fit mx-auto">
          <form>
            <div className="mb-5">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" className="h-[300px]" />
            </div>
            <Button className="bg-green-600 font-medium my-4">Submit</Button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
