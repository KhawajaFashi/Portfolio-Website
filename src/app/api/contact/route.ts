import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Configure SMTP transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: process.env.SMTP_PORT === "465" || !process.env.SMTP_PORT, // default to secure for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Premium high-tech styled HTML email template
    const htmlContent = `
      <div style="background-color: #080B12; color: #f1f5f9; font-family: 'Courier New', Courier, monospace; padding: 32px; border-radius: 12px; border: 1px solid rgba(99, 102, 241, 0.2); max-width: 600px; margin: 0 auto; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);">
        <!-- Header -->
        <div style="border-bottom: 1px solid rgba(99, 102, 241, 0.15); padding-bottom: 16px; margin-bottom: 24px;">
          <span style="color: #22D3A5; font-size: 10px; font-weight: bold; letter-spacing: 2px; text-transform: uppercase;">// Incoming Transmission</span>
          <h2 style="margin: 8px 0 0 0; color: #f1f5f9; font-size: 20px; font-weight: 800;">New Contact Form Message</h2>
        </div>

        <!-- Sender Meta Data -->
        <table style="width: 100%; font-size: 13px; margin-bottom: 24px; border-collapse: collapse; text-align: left;">
          <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
            <td style="padding: 10px 0; color: #64748b; width: 80px;">Name</td>
            <td style="padding: 10px 0; color: #22D3A5; font-weight: bold;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid rgba(255, 255, 255, 0.05);">
            <td style="padding: 10px 0; color: #64748b;">Email</td>
            <td style="padding: 10px 0; color: #6366F1; font-weight: bold;"><a href="mailto:${email}" style="color: #6366F1; text-decoration: none;">${email}</a></td>
          </tr>
        </table>

        <!-- Message Body -->
        <div style="background-color: #0D1117; border: 1px solid rgba(99, 102, 241, 0.1); border-radius: 8px; padding: 20px; font-size: 14px; line-height: 1.6; color: #cbd5e1; margin-bottom: 24px; white-space: pre-wrap;">${message}</div>

        <!-- Footer -->
        <div style="text-align: center; border-top: 1px solid rgba(99, 102, 241, 0.1); padding-top: 16px; font-size: 10px; color: #64748b;">
          This transmission was routed securely via your Portfolio Website Contact Form.
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `Portfolio Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Nodemailer error:", error);
    return NextResponse.json({ error: "Failed to transmit message: " + error.message }, { status: 500 });
  }
}
