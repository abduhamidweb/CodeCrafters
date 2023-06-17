import nodemailer from "nodemailer";
import { generateCode } from "./generateCode.js";
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'codecraftersteeam@gmail.com',
        pass: 'fglqrzgyvdqfibfd'
    }
});
// Elektron pochta yuborish funksiyasi
export const sendConfirmationEmail = async (userEmail: string) => {
    const confirmationCode = generateCode(); // Tasdiqlash kodi generatsiyalansin
    const mailOptions = {
        from: 'codecraftersteeam@gmail.com',
        to: userEmail,
        subject: 'Hi!',
        html: `<h1>
      Your password <br/>
     ${confirmationCode}
    </h1>`
    };
    try {
        const result = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + result.response);

        return confirmationCode; // Tasdiqlash kodi qaytariladi

    } catch (error) {
        console.log(error);
        throw new Error('Email yuborishda xatolik yuz berdi');
    }
};