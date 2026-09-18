import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
const port = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Origin not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);

// ...existing code...
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

app.post('/api/contact', async (request, response) => {
  const { name, email, message } = request.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return response.status(400).json({
      message: 'Name, email, and message are required.',
    });
  }

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return response.json({ message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Email error:', error);
    return response.status(500).json({
      message: 'Unable to send the message.',
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});