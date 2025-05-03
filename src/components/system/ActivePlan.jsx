import { useEffect, useState } from "react";
import { format } from "date-fns";
import { userAtom } from "@/lib/store";
import { useAtom } from "jotai";
import { supabase } from "@/lib/supabase";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  TableHead,
} from "../ui/table";

export default function ActivePlan() {
  const [user] = useAtom(userAtom);
  const [activePlans, setActivePlans] = useState([]);

  const calculateExpiryDate = (startDate, durationInDays) => {
    const start = new Date(startDate);
    const expiry = new Date(start);
    expiry.setDate(start.getDate() + durationInDays);
    return expiry;
  };

  const formatExpiryDate = (date) => {
    return format(date, "yyyy-MM-dd"); // Format as needed
  };

  //function to fetch active plans from the database by user id
  async function getPlans() {
    try {
      const { data, error } = await supabase
        .from("plans")
        .select("*")
        .eq("user_id", user?.id);
      setActivePlans(data, "fetched data");
      if (error) return console.log(error);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPlans();
  }, []);

  return (
    <>
      {activePlans.length > 0 ? (
        <Table>
          <TableHeader>
            <TableHead>Plan Name</TableHead>
            <TableHead>ExpiresAt</TableHead>
          </TableHeader>
          <TableBody>
            {activePlans.map((plan, index) => {
              const expiryDate = calculateExpiryDate(
                plan.created_at,
                plan.duration
              );
              return (
                <TableRow key={index}>
                  <TableCell>{plan?.plan_name}</TableCell>
                  <TableCell>{formatExpiryDate(expiryDate)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      ) : (
        <>
          <p className="text-xs text-center text-muted">No active Plan</p>
        </>
      )}
    </>
  );
}
