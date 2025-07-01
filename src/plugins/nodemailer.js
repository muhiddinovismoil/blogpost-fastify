import nodemailer from 'nodemailer';

export function generateOTP(length = 4) {
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL,
        pass: process.env.GMAIL_APP_PASS,
    },
});

export async function sendEmail({ to, otp }) {
    const html = `
    <div style="max-width: 480px; margin: auto; padding: 20px; font-family: sans-serif; border: 1px solid #eee; border-radius: 10px;">
      <h2 style="text-align: center; color: #4CAF50;">🔐 One-Time Password (OTP)</h2>
      <p style="font-size: 16px; color: #333;">
        Salom foydalanuvchi, quyidagi kodni tasdiqlash uchun ishlating:
      </p>
      <div style="text-align: center; margin: 20px 0;">
        <span style="font-size: 28px; letter-spacing: 8px; font-weight: bold; color: #222;">${otp}</span>
      </div>
      <p style="font-size: 14px; color: #777;">
        Kod faqat <b>5 daqiqa</b> amal qiladi. Agar siz bu so‘rovni yubormagan bo‘lsangiz, iltimos e'tiborsiz qoldiring.
      </p>
      <hr />
      <p style="font-size: 12px; color: #aaa; text-align: center;">© ${new Date().getFullYear()} Ismoil Inc.</p>
    </div>
  `;

    return await transporter.sendMail({
        from: `"Ismoil 👨‍💻" <${process.env.GMAIL}>`,
        to,
        subject: 'Your OTP Code',
        html,
    });
}
