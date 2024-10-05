"use server";
import nodemailer from "nodemailer";
import { turso } from "./database";

export async function sendContactEmail(formData) {
  if (!formData) {
    return { success: false, error: "Something went wrong." };
  }
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  if (!name || !email || !message) {
    return { success: false, error: "All fields are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: "Invalid email format." };
  }

  if (name.length < 2) {
    return {
      success: false,
      error: "Name must be at least 2 characters long.",
    };
  }

  //   if (message.length < 10) {
  //     return {
  //       success: false,
  //       error: "Message must be at least 10 characters long.",
  //     };
  //   }
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  const mailOptions = {
    from: process.env.SMTP_USER,
    to: process.env.OWNER_EMAIL,
    subject: `Contact form submission from ${name}`,
    text: message,
  };
  try {
    const now = new Date();
    const offset = 5.5;
    const istTime = new Date(now.getTime() + offset * 60 * 60 * 1000);
    const formattedISTTime = istTime
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    await turso.execute(
      `INSERT INTO contact_forms (name, email, message, created_at) VALUES (?, ?, ?, ?)`,
      [name, email, message, formattedISTTime]
    );
  } catch {}
  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}
