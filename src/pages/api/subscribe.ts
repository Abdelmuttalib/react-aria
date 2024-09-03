// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { supabase } from "@/db";
import type { NextApiRequest, NextApiResponse } from "next";

// pages/api/subscribe.js

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    try {
      const { data, error } = await supabase
        .from("waitlist")
        .insert([{ email }]);

      if (error) {
        throw error;
      }

      return res.status(200).json({ message: "Subscription successful" });
    } catch (error) {
      console.error("Error saving email:", error);
      return res.status(500).json({
        error:
          // @ts-ignore
          error?.message &&
          // @ts-ignore
          error?.message ===
            'duplicate key value violates unique constraint "waitlist_email_key"'
            ? "You are already subscribed."
            : "Something went wrong. Please try again.",
      });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
