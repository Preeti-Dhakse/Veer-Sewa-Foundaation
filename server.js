const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/donate', (req, res) => {
    const { name, email, frequency, amount, addTransactionFee } = req.body;

    // Set up nodemailer transporter (use your own email and SMTP details)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password',
        },
    });

    // Email content
    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'preetidhakse123@gmail.com', // Replace with your email
        subject: 'New Donation',
        html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Frequency: ${frequency}</p>
            <p>Amount: ${amount}</p>
            <p>Add Transaction Fee: ${addTransactionFee ? 'Yes' : 'No'}</p>
        `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
