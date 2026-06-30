import { NextResponse } from "next/server";
import { z } from "zod";
import { site } from "@/lib/site";

// ─────────────────────────────────────────────────────────────────────────────
// QUOTE REQUEST ENDPOINT
//
// • Validates the payload with zod
// • Silently drops spam (honeypot field "company")
// • Emails the lead via Resend when RESEND_API_KEY is set
//   (set RESEND_API_KEY, QUOTE_INBOX and QUOTE_FROM in your environment)
// • Falls back to logging the lead when no key is configured, so the form
//   works in local development without any setup
// ─────────────────────────────────────────────────────────────────────────────

const quoteSchema = z.object({
  name: z.string().min(2, "Name is required").max(120),
  email: z.string().email("A valid email is required"),
  phone: z.string().min(7, "A valid phone number is required").max(30),
  address: z.string().min(4, "Property address is required").max(240),
  projectType: z.string().min(2, "Project type is required").max(80),
  budget: z.string().max(60).optional().default(""),
  area: z.string().max(40).optional().default(""),
  startDate: z.string().max(40).optional().default(""),
  description: z.string().min(10, "Please describe your project").max(5000),
  company: z.string().max(200).optional().default(""), // honeypot — humans never see this field
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return NextResponse.json(
      { ok: false, error: first?.message ?? "Invalid form data." },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Honeypot: bots fill every field. Pretend success, send nothing.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const lead = {
    receivedAt: new Date().toISOString(),
    name: data.name,
    email: data.email,
    phone: data.phone,
    address: data.address,
    projectType: data.projectType,
    budget: data.budget || "Not specified",
    area: data.area || "Not specified",
    startDate: data.startDate || "Flexible",
    description: data.description,
  };

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Local development / not yet configured: keep the lead visible in logs.
    console.log("[quote] New lead (email not configured):", lead);
    return NextResponse.json({ ok: true });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const inbox = process.env.QUOTE_INBOX ?? site.email;
    const from =
      process.env.QUOTE_FROM ?? `D&D Builds Website <onboarding@resend.dev>`;

    const text = [
      `New quote request — ${lead.projectType}`,
      ``,
      `Name:            ${lead.name}`,
      `Email:           ${lead.email}`,
      `Phone:           ${lead.phone}`,
      `Property:        ${lead.address}`,
      `Project type:    ${lead.projectType}`,
      `Budget:          ${lead.budget}`,
      `Area (sq ft):    ${lead.area}`,
      `Preferred start: ${lead.startDate}`,
      ``,
      `Description:`,
      lead.description,
      ``,
      `Received: ${lead.receivedAt}`,
    ].join("\n");

    await resend.emails.send({
      from,
      to: inbox,
      replyTo: lead.email,
      subject: `New quote request: ${lead.projectType} — ${lead.name}`,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[quote] Failed to send email:", err);
    // Lead is still logged so it isn't lost even if email delivery fails.
    console.log("[quote] Lead payload:", lead);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't send your request right now. Please call or email us directly.",
      },
      { status: 500 }
    );
  }
}
