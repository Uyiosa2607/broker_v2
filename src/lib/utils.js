import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { supabase } from "./supabase";
// import { useAtom } from "jotai";
// import { userAtom } from "./store";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
}

export async function sumTransactionsByUser(userId) {
  try {
    // Fetch transactions for the specific user
    const { data: transactions, error } = await supabase
      .from("Transactions")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      console.error("Error fetching transactions:", error);
      return { totalWithdrawals: 0, totalDeposits: 0, total: 0 };
    }
    // Calculate total withdrawals
    const totalWithdrawals = transactions
      .filter((item) => item.type === "withdrawal")
      .reduce((acc, item) => acc + (item.amount || 0), 0);

    // Calculate total deposits
    const totalDeposits = transactions
      .filter((item) => item.type === "deposit")
      .reduce((acc, item) => acc + (item.amount || 0), 0);

    // Return the results
    return { totalWithdrawals, totalDeposits };
  } catch (error) {
    console.error("Error:", error);
    return { totalWithdrawals: 0, totalDeposits: 0, total: 0 };
  }
}

export async function updateUserBalance(id, value, balance) {
  try {
    const response = await supabase
      .from("Users")
      .update({
        balance: `${balance - value}`,
      })
      .eq("id", id);
    if (!response.error) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
}

// export function sendTelegramPhoto(photoUrl, caption) {
//   const url = `https://api.telegram.org/bot${botToken}/sendPhoto`;

//   const data = {
//     chat_id: chatId,
//     photo: photoUrl,
//     caption: caption,
//     parse_mode: "HTML",
//   };

//   fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       if (result.ok) {
//         console.log("Photo sent successfully");
//       } else {
//         console.error("Error sending photo:", result);
//       }
//     })
//     .catch((error) => console.error("Fetch error:", error));
// }
