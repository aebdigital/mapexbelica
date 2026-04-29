# SMTP2GO contact form setup

The contact form posts to `/.netlify/functions/contact`, which uses the SMTP2GO email API.

## Required Netlify environment variables

- `CONTACT_FORM_RECIPIENT` - address that receives form messages
- `SMTP2GO_API_KEY` - SMTP2GO API key
- `SMTP2GO_SENDER` - verified sender, for example `MaPeX Belica <noreply@mapexbelica.sk>`

## Deployment notes

1. Add the variables in Netlify: Site configuration -> Environment variables.
2. Deploy the site with the included `@netlify/plugin-nextjs` plugin.
3. The function validates `name`, `email`, and `message`, then calls `https://api.smtp2go.com/v3/email/send`.

For local function testing, run the project through Netlify Dev so `/.netlify/functions/contact` is available.
