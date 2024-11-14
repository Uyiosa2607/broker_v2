import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen w-screen  flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold inline-block text-red-500">404</h1>
      <h3 className="text-base font-medium mb-20 capitalize">page not found</h3>
      <Button
        asChild
        onClick={() => navigate("/user/dashboard")}
        variant="link"
        size={"sm"}
      >
        <div>
          <ArrowLeft />
          <span> Back to dashboard</span>
        </div>
      </Button>
    </main>
  );
}
