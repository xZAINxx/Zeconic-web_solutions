export type ContactPayload = {
  name: string;
  email: string;
  projectType: string;
  message: string;
};

const projectLabels: Record<string, string> = {
  website: "Website",
  "ai-chatbot": "AI Chatbot",
  "social-media": "Social Media Setup",
  unsure: "Not sure yet",
};

function escape(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nl2br(str: string) {
  return escape(str).replace(/\n/g, "<br />");
}

export function buildContactEmailHtml(payload: ContactPayload) {
  const { name, email, projectType, message } = payload;
  const label = projectLabels[projectType] ?? projectType;
  const sentAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>New lead from zeconic.com</title>
</head>
<body style="margin:0;padding:0;background:#05060A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#F5F7FA;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#05060A;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;background:#0B0D14;border:1px solid #1F2230;border-radius:18px;overflow:hidden;">
          <!-- Aurora bar -->
          <tr>
            <td style="height:6px;background:linear-gradient(90deg,#00E5FF 0%,#7B61FF 50%,#FF4FD8 100%);" aria-hidden="true">&nbsp;</td>
          </tr>
          <!-- Header -->
          <tr>
            <td style="padding:28px 32px 18px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <div style="font-family:'JetBrains Mono',Menlo,monospace;font-size:11px;letter-spacing:0.22em;text-transform:uppercase;color:#A2A8B8;">
                      <span style="color:#00E5FF;">●</span>&nbsp; Zeconic Web Solutions
                    </div>
                    <div style="margin-top:10px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:24px;font-weight:700;line-height:1.2;letter-spacing:-0.01em;color:#F5F7FA;">
                      New lead from the contact form
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Hairline -->
          <tr>
            <td style="padding:0 32px;">
              <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(0,229,255,0.45),rgba(123,97,255,0.45),rgba(255,79,216,0.35),transparent);"></div>
            </td>
          </tr>
          <!-- Lead details card -->
          <tr>
            <td style="padding:24px 32px 8px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#11141E;border:1px solid #1F2230;border-radius:14px;">
                <tr>
                  <td style="padding:6px 18px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding:14px 0;border-bottom:1px solid #1F2230;">
                          <div style="font-family:'JetBrains Mono',Menlo,monospace;font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;color:#5A6072;">Name</div>
                          <div style="margin-top:6px;font-size:16px;font-weight:600;color:#F5F7FA;">${escape(name)}</div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 0;border-bottom:1px solid #1F2230;">
                          <div style="font-family:'JetBrains Mono',Menlo,monospace;font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;color:#5A6072;">Email</div>
                          <div style="margin-top:6px;font-size:16px;font-weight:500;">
                            <a href="mailto:${escape(email)}" style="color:#00E5FF;text-decoration:none;">${escape(email)}</a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:14px 0;">
                          <div style="font-family:'JetBrains Mono',Menlo,monospace;font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;color:#5A6072;">Project type</div>
                          <div style="margin-top:8px;">
                            <span style="display:inline-block;padding:5px 11px;border:1px solid rgba(123,97,255,0.40);background:rgba(123,97,255,0.10);border-radius:999px;font-family:'JetBrains Mono',Menlo,monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#A78BFF;">${escape(label)}</span>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Message card -->
          <tr>
            <td style="padding:16px 32px 8px 32px;">
              <div style="font-family:'JetBrains Mono',Menlo,monospace;font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;color:#5A6072;padding-bottom:10px;">
                <span style="color:#FF4FD8;">●</span>&nbsp; Message
              </div>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#11141E;border:1px solid #1F2230;border-radius:14px;">
                <tr>
                  <td style="padding:20px 22px;font-size:15px;line-height:1.65;color:#F5F7FA;">
                    ${nl2br(message)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- CTA -->
          <tr>
            <td style="padding:22px 32px 8px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <a href="mailto:${escape(email)}?subject=Re%3A%20your%20project%20enquiry%20%E2%80%93%20Zeconic%20Web%20Solutions"
                       style="display:inline-block;padding:13px 22px;border-radius:10px;background:linear-gradient(120deg,#00E5FF 0%,#7B61FF 45%,#FF4FD8 100%);color:#F5F7FA;font-weight:600;font-size:14px;text-decoration:none;letter-spacing:0.01em;">
                      Reply to ${escape(name)} →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer meta -->
          <tr>
            <td style="padding:18px 32px 28px 32px;">
              <div style="height:1px;background:#1F2230;margin-bottom:16px;"></div>
              <div style="font-family:'JetBrains Mono',Menlo,monospace;font-size:10.5px;letter-spacing:0.16em;text-transform:uppercase;color:#5A6072;">
                Sent ${escape(sentAt)} ET&nbsp;&nbsp;·&nbsp;&nbsp;zeconic.com contact form
              </div>
            </td>
          </tr>
        </table>
        <div style="margin-top:14px;font-family:'JetBrains Mono',Menlo,monospace;font-size:10.5px;letter-spacing:0.18em;text-transform:uppercase;color:#5A6072;">
          Zeconic LLC · Web Solutions
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function buildContactEmailText(payload: ContactPayload) {
  const { name, email, projectType, message } = payload;
  const label = projectLabels[projectType] ?? projectType;
  return [
    "NEW LEAD — Zeconic Web Solutions",
    "",
    `Name:         ${name}`,
    `Email:        ${email}`,
    `Project type: ${label}`,
    "",
    "Message:",
    message,
    "",
    "—",
    "Sent from the zeconic.com contact form.",
  ].join("\n");
}
