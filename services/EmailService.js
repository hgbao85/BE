// services/emailService.js
const nodemailer = require('nodemailer');

// Tạo transporter cho Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'libary201334@gmail.com',
        pass: 'jzsf aiey mgky mpsj'
    }
});

// Hàm gửi mã xác minh
const sendVerificationCode = async (email, code) => {
    const mailOptions = {
        from: 'libary201334@gmail.com',
        to: email,
        subject: 'MemmoMind: Your Verification Code',
        text: `Your verification code is ${code}. Please use this code to verify your account.`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Verification email sent');
    } catch (error) {
        console.error('Error sending email', error);
    }
};

module.exports = { sendVerificationCode };
