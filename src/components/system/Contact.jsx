import { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import emailjs from "@emailjs/browser";
import NavBar from "./Navigation";
import Footer from "./Footer";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  async function sendEmail(event) {
    event.preventDefault();
    try {
      const request = await emailjs.sendForm(
        "service_x338c3s",
        "template_9ovyjwv",
        form.current,
        {
          publicKey: "Y3aWmVl31mp5QZBzy",
        }
      );

      if (request.ok) return toast.success("Ticket Submited");

      return toast.error("Something went wrong");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="bg-gray-200 w-screen">
      <NavBar />
      <section className="min-h-screen">
        <div className=" w-[90%] md:w-[70%] mt-[2rem] p-4 rounded-lg bg-white h-fit mx-auto">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-col gap-1.5 mb-3">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required name="user_email" />
            </div>
            <div className="mb-5">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                className="h-[180px] md:h-[300px]"
              />
            </div>
            <Button type="submit" className="bg-green-600 font-medium my-4">
              Submit
            </Button>
          </form>
        </div>
        <TawkMessengerReact
          propertyId="651c8434e6bed319d0059320"
          widgetId="1hbrm8s5g"
        />
      </section>
      <Footer />
      <ToastContainer />
    </main>
  );
}
