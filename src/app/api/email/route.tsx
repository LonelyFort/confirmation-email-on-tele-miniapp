import { Resend } from 'resend';
import { ContactUsEmail } from '../../../emails/contact-us';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const payload = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'delivered@resend.dev',
      to: payload.email,
      subject: `Thank you for your confirmation`,
      react: ContactUsEmail(),
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
