import { useAtom } from "jotai";
import { userAtom } from "@/lib/store";
import { formatCurrency } from "@/lib/utils";

export default function Balance() {
  const [user] = useAtom(userAtom);

  return <span className="font-semibold">{formatCurrency(user.balance)}</span>;
}
