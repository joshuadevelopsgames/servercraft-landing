import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate
    if (!name || !email) {
      return NextResponse.json({ 
        success: false, 
        error: 'Name and email are required' 
      }, { status: 400 });
    }

    // Send email to you
    const { data, error } = await resend.emails.send({
      from: 'ServerCraft Waitlist <onboarding@resend.dev>',
      to: [process.env.NOTIFICATION_EMAIL || 'your-email@example.com'],
      subject: `🎮 New ServerCraft Waitlist Sign-up: ${name}`,
      html: `
        <h2>New Waitlist Sign-up! 🎉</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
        <hr />
        <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ 
        success: false, 
        error: 'Failed to send email' 
      }, { status: 500 });
    }

    // Optional: Also send confirmation email to the user
    await resend.emails.send({
      from: 'ServerCraft <onboarding@resend.dev>',
      to: [email],
      subject: '✅ You\'re on the ServerCraft Waitlist!',
      html: `
        <h2>Thanks for joining, ${name}! 🎉</h2>
        <p>You're officially on the ServerCraft waitlist.</p>
        <p>We'll email you when we launch (coming soon!)</p>
        <p>Early members get <strong>3 months free Pro</strong> 🎁</p>
        <br />
        <p>Questions? Just reply to this email.</p>
        <hr />
        <p><small>ServerCraft - AI-Powered Minecraft Server Console</small></p>
      `,
    });

    return NextResponse.json({ 
      success: true,
      message: 'Successfully joined waitlist!'
    });

  } catch (error: any) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}

