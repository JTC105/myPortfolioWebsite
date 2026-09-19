import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { Resend } from 'resend';

const app = express();
const port = process.env.PORT || 5000;

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://jtc105.github.io',
  'https://myportfoliowebsite-production-8bbd.up.railway.app',
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

app.use(express.json());

app.post('/api/contact', async (request, response) => {
  const { name, email, message } = request.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return response.status(400).json({
      message: 'Name, email, and message are required.',
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error('Resend error:', error);

      return response.status(500).json({
        message: 'Unable to send the message.',
      });
    }

    console.log('Email sent successfully:', data?.id);

    return response.json({
      message: 'Message sent successfully.',
    });
  } catch (error) {
    console.error('Email error:', error);

    return response.status(500).json({
      message: 'Unable to send the message.',
    });
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});