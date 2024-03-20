'use client';
import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function ContactApi(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      // Validate the incoming data
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }
      if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Invalid email format' });
      }

      // Perform the SQL query to insert data into the contacts table
      const result = await sql`INSERT INTO contacts (name, email, message) VALUES (${name}, ${email}, ${message}) RETURNING *`;

      // If the insertion is successful, return the inserted row
      res.status(200).json({ success: true, data: result.rows[0] });
    } catch (error) {
      console.error('Error processing form data:', error);
      res.status(500).json({ error: 'Failed to process form data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

// Function to validate email format
function isValidEmail(email: string): boolean {
  // Use a regular expression or any other method to validate the email format
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
