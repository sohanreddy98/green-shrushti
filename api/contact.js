import { Resend } from 'resend'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'support@greenshrushti.in'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Green Shrushti <onboarding@resend.dev>'

const esc = str => String(str || '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

// ── Shared branding tokens ──
const C = {
  ink: '#0E1F13',
  forest: '#163825',
  pine: '#1D5436',
  sage: '#4A9B6B',
  mint: '#A8D4B8',
  cream: '#F6F1E9',
  paper: '#FDFAF6',
  white: '#FFFFFF',
  muted: '#7A8C7E',
  border: '#E6EAE7',
}

const shell = ({ heading, subheading, body, ctaLabel, ctaHref }) => `<!doctype html>
<html><body style="margin:0;padding:0;background:${C.paper};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:${C.ink};">
  <div style="padding:32px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;margin:0 auto;background:${C.white};border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(14,31,19,0.05),0 16px 48px rgba(14,31,19,0.08);">
      <tr>
        <td style="background:${C.forest};padding:32px 36px;">
          <table width="100%"><tr>
            <td style="font-size:13px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${C.mint};">Green Shrushti</td>
            <td align="right" style="font-size:12px;color:rgba(255,255,255,0.55);letter-spacing:0.02em;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })} IST</td>
          </tr></table>
          <div style="margin-top:18px;color:${C.white};font-size:22px;font-weight:700;line-height:1.2;">${heading}</div>
          ${subheading ? `<div style="margin-top:8px;color:rgba(255,255,255,0.70);font-size:14px;line-height:1.5;">${subheading}</div>` : ''}
        </td>
      </tr>
      <tr>
        <td style="padding:32px 36px 28px;">
          ${body}
          ${ctaLabel && ctaHref ? `
          <div style="margin-top:28px;text-align:center;">
            <a href="${ctaHref}" style="display:inline-block;background:${C.sage};color:${C.white};text-decoration:none;padding:13px 28px;border-radius:8px;font-size:15px;font-weight:600;letter-spacing:0.01em;">${ctaLabel}</a>
          </div>` : ''}
        </td>
      </tr>
      <tr>
        <td style="background:${C.cream};padding:20px 36px;border-top:1px solid ${C.border};font-size:12px;color:${C.muted};line-height:1.6;text-align:center;">
          Green Shrushti Waste Management &amp; Sustainability Pvt. Ltd.<br/>
          Mumbai, Maharashtra · <a href="mailto:support@greenshrushti.in" style="color:${C.pine};text-decoration:none;">support@greenshrushti.in</a> · <a href="https://wa.me/918482841702" style="color:${C.pine};text-decoration:none;">+91 8482 841702</a>
        </td>
      </tr>
    </table>
  </div>
</body></html>`

const buildNotifyEmail = ({ name, email, phone, company, service, volume, message, source }) => {
  const rows = [
    ['Name', name],
    ['Company', company],
    ['Email', email],
    ['Phone / WhatsApp', phone],
    ['Interested in', service],
    ['Expected Volume', volume],
    ['Source', source || 'contact form'],
  ].filter(([, v]) => v)

  const rowsHtml = rows.map(([k, v]) =>
    `<tr>
       <td style="padding:10px 0;border-bottom:1px solid ${C.border};color:${C.muted};font-size:12px;letter-spacing:0.08em;text-transform:uppercase;width:150px;vertical-align:top;">${esc(k)}</td>
       <td style="padding:10px 0;border-bottom:1px solid ${C.border};color:${C.ink};font-size:15px;line-height:1.5;">${esc(v)}</td>
     </tr>`
  ).join('')

  const messageHtml = message ? `
    <div style="margin-top:22px;padding:18px 20px;background:${C.cream};border-radius:10px;border-left:3px solid ${C.sage};">
      <div style="font-size:11px;font-weight:700;color:${C.sage};letter-spacing:0.12em;text-transform:uppercase;margin-bottom:8px;">Message</div>
      <div style="font-size:15px;color:${C.ink};line-height:1.72;white-space:pre-wrap;">${esc(message)}</div>
    </div>` : ''

  return shell({
    heading: 'New website enquiry',
    subheading: `From ${esc(name)}${company ? ` · ${esc(company)}` : ''}`,
    body: `<table width="100%" style="border-collapse:collapse;">${rowsHtml}</table>${messageHtml}
           <div style="margin-top:28px;padding-top:18px;border-top:1px solid ${C.border};font-size:13px;color:${C.muted};line-height:1.6;">
             Reply directly to this email to respond to <strong style="color:${C.ink};">${esc(name)}</strong>${email ? ` at <a href="mailto:${esc(email)}" style="color:${C.pine};">${esc(email)}</a>` : ''}.
           </div>`,
  })
}

const buildConfirmationEmail = ({ name, service }) => {
  const firstName = String(name).trim().split(/\s+/)[0] || 'there'
  return shell({
    heading: `Thanks, ${esc(firstName)} — we've received your enquiry`,
    subheading: 'Our team will get back to you within one working day.',
    body: `
      <p style="margin:0 0 16px;font-size:15px;line-height:1.72;color:${C.ink};">
        Thanks for reaching out to Green Shrushti. We've received your enquiry${service ? ` regarding <strong>${esc(service)}</strong>` : ''} and a member of our team will review it shortly.
      </p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.72;color:${C.ink};">
        You can expect a response within <strong>one working day</strong>. For anything urgent, feel free to reach us directly:
      </p>
      <table width="100%" style="border-collapse:collapse;margin:20px 0 8px;">
        <tr>
          <td style="padding:12px 16px;background:${C.paper};border-radius:8px;font-size:14px;">
            <div style="color:${C.muted};font-size:11px;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:4px;">WhatsApp / Phone</div>
            <a href="https://wa.me/918482841702" style="color:${C.pine};font-weight:600;text-decoration:none;">+91 8482 841702</a>
          </td>
          <td width="8"></td>
          <td style="padding:12px 16px;background:${C.paper};border-radius:8px;font-size:14px;">
            <div style="color:${C.muted};font-size:11px;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:4px;">Email</div>
            <a href="mailto:support@greenshrushti.in" style="color:${C.pine};font-weight:600;text-decoration:none;">support@greenshrushti.in</a>
          </td>
        </tr>
      </table>
      <p style="margin:24px 0 0;font-size:13px;line-height:1.6;color:${C.muted};">
        This is an automated confirmation — no action needed. Our team will reach out personally with next steps.
      </p>`,
    ctaLabel: 'Explore our services',
    ctaHref: 'https://greenshrushti.in/',
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service not configured' })
  }

  const { name, email, phone, company, service, volume, message, source } = req.body || {}

  if (!name || !phone || !email) {
    return res.status(400).json({ error: 'Name, email, and phone are required' })
  }

  const resend = new Resend(apiKey)

  try {
    // 1. Notify support@greenshrushti.in
    const notify = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email || undefined,
      subject: `New enquiry from ${name}${company ? ` · ${company}` : ''}`,
      html: buildNotifyEmail({ name, email, phone, company, service, volume, message, source }),
    })
    if (notify.error) {
      console.error('Notify email error:', notify.error)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    // 2. Send confirmation to user (only if we have their email)
    if (email) {
      const confirm = await resend.emails.send({
        from: FROM_EMAIL,
        to: [email],
        subject: "We've received your enquiry — Green Shrushti",
        html: buildConfirmationEmail({ name, service }),
      })
      if (confirm.error) {
        // Don't fail the whole request if confirmation fails — notify went through
        console.error('Confirmation email error:', confirm.error)
      }
    }

    return res.status(200).json({ success: true, id: notify.data?.id })
  } catch (err) {
    console.error('Unexpected error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
