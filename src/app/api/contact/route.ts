import { NextResponse } from "next/server";
import { Resend } from "resend";

const DESTINATION_EMAIL = "vishalchepyala@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, selectedGoal, selectedDate, selectedTime, formType } = body;

    console.log("📥 New Lead Form Submission:", {
      name,
      email,
      company,
      phone,
      goal: selectedGoal,
      date: selectedDate,
      time: selectedTime,
      formType: formType || "Strategy Session Booking",
      timestamp: new Date().toISOString(),
    });

    // Check if RESEND_API_KEY environment variable is set
    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const resend = new Resend(apiKey);

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; rounded: 12px; background-color: #030305; color: #ffffff;">
          <h2 style="color: #a78bfa; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
            🚨 New LOOMIS AI Lead Submission
          </h2>
          <p style="font-size: 14px; color: #d4d4d8;">A prospect has submitted their details on the website.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="border-bottom: 1px solid #333;">
              <td style="padding: 10px; font-weight: bold; color: #a78bfa; width: 140px;">Form Type:</td>
              <td style="padding: 10px; color: #fff;">${formType || "30-Min Strategy Call Booking"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #333;">
              <td style="padding: 10px; font-weight: bold; color: #a78bfa;">Full Name:</td>
              <td style="padding: 10px; color: #fff;">${name || "N/A"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #333;">
              <td style="padding: 10px; font-weight: bold; color: #a78bfa;">Email Address:</td>
              <td style="padding: 10px; color: #fff;"><a href="mailto:${email}" style="color: #67e8f9;">${email || "N/A"}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #333;">
              <td style="padding: 10px; font-weight: bold; color: #a78bfa;">Phone Number:</td>
              <td style="padding: 10px; color: #fff;"><a href="tel:${phone}" style="color: #67e8f9;">${phone || "N/A"}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #333;">
              <td style="padding: 10px; font-weight: bold; color: #a78bfa;">Company:</td>
              <td style="padding: 10px; color: #fff;">${company || "N/A"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #333;">
              <td style="padding: 10px; font-weight: bold; color: #a78bfa;">Automation Goal:</td>
              <td style="padding: 10px; color: #fff; font-weight: bold;">${selectedGoal || "N/A"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #333;">
              <td style="padding: 10px; font-weight: bold; color: #a78bfa;">Target Booking Slot:</td>
              <td style="padding: 10px; color: #10b981; font-weight: bold;">${selectedDate || "N/A"} at ${selectedTime || "N/A"}</td>
            </tr>
          </table>

          <div style="margin-top: 25px; padding: 15px; background-color: #121217; border-radius: 8px; font-size: 12px; color: #a3a3a3;">
            <p style="margin: 0;">Sent automatically from <strong>LOOMIS AI Engine</strong>.</p>
            <p style="margin: 5px 0 0 0;">Recipient: <strong>${DESTINATION_EMAIL}</strong></p>
          </div>
        </div>
      `;

      await resend.emails.send({
        from: "LOOMIS AI Leads <onboarding@resend.dev>",
        to: DESTINATION_EMAIL,
        subject: `🔥 New Lead: ${name || email} — ${selectedGoal || "Strategy Call"}`,
        html: htmlContent,
      });
    }

    return NextResponse.json({
      success: true,
      message: `Lead details successfully processed and routed to ${DESTINATION_EMAIL}`,
    });
  } catch (error: any) {
    console.error("❌ Lead processing error:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to process lead submission" },
      { status: 500 }
    );
  }
}
