var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
export const sendConfirmationEmail = (userEmail) => __awaiter(void 0, void 0, void 0, function* () {
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
        const result = yield transporter.sendMail(mailOptions);
        console.log('Email sent: ' + result.response);
        return confirmationCode; // Tasdiqlash kodi qaytariladi
    }
    catch (error) {
        console.log(error);
        throw new Error('Email yuborishda xatolik yuz berdi');
    }
});
