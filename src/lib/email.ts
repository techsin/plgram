import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Send a transactional email via Resend.
 */
export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  return resend.emails.send({
    from: "Plgram <noreply@yourdomain.com>",
    to,
    subject,
    html,
  });
}
