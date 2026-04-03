import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY
    ? new Resend(process.env.RESEND_API_KEY)
    : null;

export const sendGoodbyeEmail = async (email: string, name: string) => {
    if (!resend) {
        console.warn("Resend API Key missing. Skipping email.");
        return;
    }

    try {
        await resend.emails.send({
            from: 'Cecess <onboarding@resend.dev>', // Should be updated to real domain later
            to: email,
            subject: 'Goodbye from Cecess',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h1>We're sorry to see you go, ${name}.</h1>
                    <p>Your account has been deleted and your subscription cancelled.</p>
                    <p>We hope to see you again in the future!</p>
                    <br/>
                    <p>Best,</p>
                    <p>The Cecess Team</p>
                </div>
            `
        });
        console.log(`Goodbye email sent to ${email}`);
    } catch (error) {
        console.error("Failed to send goodbye email:", error);
    }
};
