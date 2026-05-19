import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export const sendEmail = async ({ to, subject, text, html }) => {
    try {
        const info = await transporter.sendMail({
            from: '"My App" <no-reply@myapp.com',
            to,
            subject,
            text,
            html,
        });

        console.log("Email sent:", info.messageId);
    }   catch (error) {
            console.error("Error sending email:", error);
        }
    }