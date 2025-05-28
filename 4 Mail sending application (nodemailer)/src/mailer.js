const nodemailer = require("nodemailer");
require("dotenv").config();

async function sendMail() {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `"Mail Gönderici 👨‍💻" <${process.env.EMAIL_USER}>`,
            to: "target@example.com",
            subject: "🚀 Node.js ile Mail Gönderme Başarılı!",
            text: "Bu e-posta, Nodemailer kullanılarak gönderilmiştir.",
            html: "<h3>Bu e-posta, <strong>Node.js</strong> ve <strong>Nodemailer</strong> kullanılarak gönderildi!</h3>"
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("✅ E-posta gönderildi:", info.messageId);
    } catch (error) {
        console.error("❌ E-posta gönderme hatası:", error);
    }
}

sendMail();