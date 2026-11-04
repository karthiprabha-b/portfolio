import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, timeline, budget, message } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.ADMIN_EMAIL || 'karthikeyanprabakaran23@gmail.com';

    // ── 1. OWNER LEAD EMAIL TEMPLATE ──
    const ownerHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; color: #1e293b;">
        <div style="background: linear-gradient(135deg, #0062ff, #1d4ed8); padding: 28px; text-align: left; color: #ffffff;">
          <span style="display: inline-block; padding: 4px 10px; background: rgba(255,255,255,0.2); border-radius: 20px; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">New Portfolio Inquiry</span>
          <h1 style="margin: 12px 0 0 0; font-size: 24px; font-weight: 800; line-height: 1.2;">${name} wants to collaborate!</h1>
        </div>

        <div style="padding: 28px;">
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600; width: 35%;">Client Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 700;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">Client Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0062ff; font-size: 14px; font-weight: 600;">
                <a href="mailto:${email}" style="color: #0062ff; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">Phone / WhatsApp</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">Service Needed</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 700;">${service || 'Full-Stack Development'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">Expected Timeline</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;">${timeline || 'Flexible'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">Estimated Budget</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 700;">${budget || 'Undecided'}</td>
            </tr>
          </table>

          <div style="background: #f8fafc; border-left: 4px solid #0062ff; padding: 16px 20px; border-radius: 8px; margin-bottom: 24px;">
            <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">Project Details / Message:</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="text-align: center; padding-top: 10px;">
            <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(service || 'Project Collaboration')}%20-%20Karthikeyan%20Prabakaran" style="display: inline-block; background: #0062ff; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 30px; font-size: 14px; font-weight: 700;">Reply to ${name}</a>
          </div>
        </div>

        <div style="background: #f8fafc; padding: 16px 28px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;">
          Delivered via Karthikeyan Prabakaran Portfolio
        </div>
      </div>
    `;

    // ── 2. CLIENT CONFIRMATION EMAIL TEMPLATE ──
    const clientHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; color: #1e293b;">
        <div style="background: #0f172a; padding: 32px 28px; text-align: left; color: #ffffff;">
          <div style="display: inline-block; width: 36px; height: 36px; line-height: 36px; background: #0062ff; color: #ffffff; font-weight: 900; font-size: 14px; border-radius: 8px; text-align: center; margin-bottom: 16px;">KP</div>
          <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 800; line-height: 1.3;">Thank you for your message, ${name}!</h1>
          <p style="margin: 0; font-size: 14px; color: #94a3b8; line-height: 1.5;">I have received your inquiry and will review the scope shortly.</p>
        </div>

        <div style="padding: 28px;">
          <p style="font-size: 15px; line-height: 1.6; color: #334155; margin-top: 0;">
            Hi <strong>${name}</strong>,
          </p>
          <p style="font-size: 14px; line-height: 1.6; color: #475569;">
            Thanks for visiting my portfolio and sharing details about your <strong>${service || 'project'}</strong>. I review all project requirements and will follow up with you within <strong>2 to 4 hours</strong>.
          </p>

          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px 20px; margin: 20px 0;">
            <h4 style="margin: 0 0 12px 0; font-size: 12px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; color: #0062ff;">Inquiry Summary</h4>
            <div style="font-size: 13px; color: #475569; line-height: 1.6;">
              <div><strong>Service:</strong> ${service || 'General Project'}</div>
              <div><strong>Expected Timeline:</strong> ${timeline || 'Flexible'}</div>
              <div><strong>Estimated Budget:</strong> ${budget || 'Undecided'}</div>
            </div>
          </div>

          <p style="font-size: 14px; line-height: 1.6; color: #475569;">
            Need to discuss something urgently or share design links right away? Feel free to ping me on WhatsApp:
          </p>

          <div style="text-align: center; margin: 24px 0;">
            <a href="https://wa.me/919976893141" style="display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 30px; font-size: 14px; font-weight: 700;">
              Chat on WhatsApp (+91 99768 93141)
            </a>
          </div>

          <div style="border-top: 1px solid #f1f5f9; padding-top: 20px; margin-top: 28px;">
            <p style="margin: 0; font-size: 14px; font-weight: 700; color: #0f172a;">Karthikeyan Prabakaran</p>
            <p style="margin: 2px 0 0 0; font-size: 12px; color: #64748b;">Software Developer &bull; Full-Stack &bull; AI Automation</p>
            <p style="margin: 4px 0 0 0; font-size: 12px; color: #0062ff;">
              <a href="mailto:karthikeyanprabakaran23@gmail.com" style="color: #0062ff; text-decoration: none;">karthikeyanprabakaran23@gmail.com</a> &bull; +91 99768 93141
            </p>
          </div>
        </div>

        <div style="background: #f8fafc; padding: 14px 28px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 11px; color: #94a3b8;">
          &copy; ${new Date().getFullYear()} Karthikeyan Prabakaran. All rights reserved.
        </div>
      </div>
    `;

    if (resendApiKey) {
      // Helper function to send email via native Resend REST API (no npm packages required!)
      const sendResendEmail = async (to: string, subject: string, html: string, replyTo?: string) => {
        const payload: Record<string, any> = {
          from: 'Karthikeyan Portfolio <onboarding@resend.dev>',
          to: [to],
          subject,
          html,
        };
        if (replyTo) {
          payload.reply_to = replyTo;
        }

        const res = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        return res.json();
      };

      // 1. Send Lead Notification to Karthikeyan (Owner)
      const ownerResult = await sendResendEmail(
        recipientEmail,
        `⚡ New Project Inquiry from ${name} [${service || 'General'}]`,
        ownerHtml,
        email
      );

      console.log('Resend Lead Email Result:', ownerResult);

      // 2. Try sending confirmation email to client
      try {
        await sendResendEmail(
          email,
          `Thank you for reaching out, ${name}! [Received]`,
          clientHtml
        );
      } catch (clientErr) {
        // With Resend free tier before custom domain verification, sending to external addresses is restricted
        console.warn('Note: Client confirmation email skipped or restricted on unverified domain:', clientErr);
      }

      if (ownerResult.error) {
        throw new Error(ownerResult.error.message || 'Resend error sending email');
      }

      return NextResponse.json({
        success: true,
        message: 'Your message has been sent successfully! Check your inbox for confirmation.',
      });
    }

    // Fallback if RESEND_API_KEY is not set
    console.log('Inquiry received (No API key):', { name, email, phone, service, timeline, budget, message });
    return NextResponse.json({
      success: true,
      message: 'Message received! (Setup RESEND_API_KEY for live delivery)',
    });
  } catch (error: any) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || 'Failed to send message. Please try again or reach out on WhatsApp.',
      },
      { status: 500 }
    );
  }
}
