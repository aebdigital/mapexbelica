const SMTP2GO_ENDPOINT = "https://api.smtp2go.com/v3/email/send";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json"
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function response(statusCode, body) {
  return {
    statusCode,
    headers,
    body: JSON.stringify(body)
  };
}

function clean(value) {
  return String(value || "").trim();
}

function escapeHtml(value) {
  return clean(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

exports.handler = async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return response(204, {});
  }

  if (event.httpMethod !== "POST") {
    return response(405, { message: "Method not allowed." });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return response(400, { message: "Invalid JSON payload." });
  }

  const name = clean(payload.name);
  const email = clean(payload.email);
  const message = clean(payload.message);

  if (!name || !email || !message) {
    return response(400, { message: "Vyplňte prosím meno, email a správu." });
  }

  if (!emailPattern.test(email)) {
    return response(400, { message: "Zadajte prosím platnú emailovú adresu." });
  }

  const recipient = process.env.CONTACT_FORM_RECIPIENT;
  const apiKey = process.env.SMTP2GO_API_KEY;
  const sender = process.env.SMTP2GO_SENDER;

  if (!recipient || !apiKey || !sender) {
    return response(500, { message: "Email služba nie je nakonfigurovaná." });
  }

  const htmlBody = `
    <h2>Nová správa z webu mapexbelica.sk</h2>
    <p><strong>Meno:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Správa:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  const textBody = [
    "Nová správa z webu mapexbelica.sk",
    `Meno: ${name}`,
    `Email: ${email}`,
    "",
    message
  ].join("\n");

  try {
    const smtpResponse = await fetch(SMTP2GO_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        api_key: apiKey,
        sender,
        to: [recipient],
        subject: `Nová správa z webu od ${name}`,
        html_body: htmlBody,
        text_body: textBody,
        custom_headers: [
          {
            header: "Reply-To",
            value: email
          }
        ]
      })
    });

    const result = await smtpResponse.json().catch(() => ({}));
    const succeeded = result?.data?.succeeded;

    if (!smtpResponse.ok || succeeded === 0) {
      return response(502, {
        message: "Správu sa nepodarilo odoslať. Skúste to prosím neskôr."
      });
    }

    return response(200, { message: "Ďakujeme, správa bola odoslaná." });
  } catch {
    return response(502, {
      message: "Správu sa nepodarilo odoslať. Skúste to prosím neskôr."
    });
  }
};
