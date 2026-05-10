import { Resend } from "resend";
import {
  buildContactEmailHtml,
  buildContactEmailText,
  type ContactPayload,
} from "@/lib/contactEmail";

export const runtime = "nodejs";

const ALLOWED_PROJECT_TYPES = new Set([
  "website",
  "ai-chatbot",
  "social-media",
  "unsure",
]);

function badRequest(message: string) {
  return Response.json({ ok: false, error: message }, { status: 400 });
}

function serverError(message: string) {
  return Response.json({ ok: false, error: message }, { status: 500 });
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return serverError(
      "Contact form is not configured. Missing one of RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL.",
    );
  }

  let body: Partial<ContactPayload>;
  try {
    body = await req.json();
  } catch {
    return badRequest("Invalid JSON body.");
  }

  const name = (body.name ?? "").toString().trim();
  const email = (body.email ?? "").toString().trim();
  const projectType = (body.projectType ?? "").toString().trim();
  const message = (body.message ?? "").toString().trim();

  if (!name || name.length > 200) return badRequest("Name is required.");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    return badRequest("A valid email is required.");
  if (!ALLOWED_PROJECT_TYPES.has(projectType))
    return badRequest("Project type is required.");
  if (!message || message.length < 5 || message.length > 5000)
    return badRequest("Message must be between 5 and 5000 characters.");

  const payload: ContactPayload = { name, email, projectType, message };

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `New lead from ${name} — ${projectType}`,
      replyTo: email,
      html: buildContactEmailHtml(payload),
      text: buildContactEmailText(payload),
    });

    if (error) {
      console.error("Resend error:", error);
      return serverError(error.message || "Email delivery failed.");
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Contact POST exception:", err);
    return serverError("Unexpected server error.");
  }
}
