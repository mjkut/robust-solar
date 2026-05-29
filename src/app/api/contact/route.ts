import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().optional(),
  type: z.enum(["quote", "installation", "product", "maintenance", "general"]),
  subject: z.string().min(3).max(200),
  message: z.string().min(10).max(2000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = inquirySchema.parse(body);

    // Store in database (when DATABASE_URL is configured)
    // await db.inquiry.create({ data });

    // Send email notification (when RESEND_API_KEY is configured)
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "website@robustsolarenergy.co.za",
    //   to: [process.env.CONTACT_EMAIL!],
    //   subject: `New ${data.type} inquiry: ${data.subject}`,
    //   html: `<p>From: ${data.name} (${data.email})</p><p>${data.message}</p>`,
    // });

    // Log the inquiry for development
    if (process.env.NODE_ENV === "development") {
      console.log("[Contact Form]", data);
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
