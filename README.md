# E.M.O.E Website

Static high-end landing page with animated program carousel and admission form.

## Cloudflare Pages
- Build command: none
- Build output directory: `/`
- Framework preset: None

For real email sending, deploy the `functions/api-admission.js` function and add the environment variable `RESEND_API_KEY` in Cloudflare Pages. Optionally add `EMAIL_FROM` using a verified domain in Resend.
