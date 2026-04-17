import { Resend } from 'resend'

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@greenshrushti.com'
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Green Shrushti <onboarding@resend.dev>'

const esc = str => String(str || '')
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Email service not configured' })
  }

  const { name, email, phone, company, service, volume, message, source } = req.body || {}

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' })
  }
  if (!email && source !== 'hero') {
    return res.status(400).json({ error: 'Email is required' })
  }

  const resend = new Resend(apiKey)
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
    `<tr><td style="padding:8px 14px;border-bottom:1px solid #eee;color:#7A8C7E;font-size:13px;letter-spacing:0.04em;text-transform:uppercase;width:150px;">${esc(k)}</td><td style="padding:8px 14px;border-bottom:1px solid #eee;color:#0E1F13;font-size:15px;">${esc(v)}</td></tr>`
  ).join('')

  const messageHtml = message
    ? `<div style="margin-top:24px;padding:20px;background:#F6F1E9;border-radius:8px;border-left:4px solid #4A9B6B;">
         <div style="font-size:13px;color:#7A8C7E;letter-spacing:0.04em;text-transform:uppercase;margin-bottom:8px;">Message</div>
         <div style="font-size:15px;color:#0E1F13;line-height:1.65;white-space:pre-wrap;">${esc(message)}</div>
       </div>`
    : ''

  const html = `<!doctype html>
    <html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#FDFAF6;padding:32px 16px;margin:0;">
      <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06);">
        <div style="background:#163825;padding:28px 32px;">
          <h1 style="color:#fff;margin:0;font-size:20px;font-weight:600;">New Website Enquiry</h1>
          <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:14px;">greenshrushti.in · ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })} IST</p>
        </div>
        <div style="padding:28px 32px;">
          <table style="width:100%;border-collapse:collapse;">${rowsHtml}</table>
          ${messageHtml}
          <div style="margin-top:28px;padding-top:20px;border-top:1px solid #eee;font-size:13px;color:#7A8C7E;">
            Reply directly to this email to respond to <strong>${esc(name)}</strong>${email ? ` at ${esc(email)}` : ''}.
          </div>
        </div>
      </div>
    </body></html>`

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email || undefined,
      subject: `New enquiry from ${name}${company ? ` · ${company}` : ''}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return res.status(500).json({ error: 'Failed to send email' })
    }

    return res.status(200).json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Unexpected error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
