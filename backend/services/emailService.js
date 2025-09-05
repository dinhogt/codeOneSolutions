import dotenv from 'dotenv';
dotenv.config();

import nodemailer from 'nodemailer';

export const sendContactEmail = async ({ name, email, phone, message }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // Corretamente lido neste momento
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  const html = `
    <h2>Novo contato do site</h2>
    <p><strong>Nome:</strong> ${name}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${phone || '-'}</p>
    <p><strong>Mensagem:</strong><br/>${(message || '').replace(/\n/g, '<br/>')}</p>
  `;

  const info = await transporter.sendMail({
    from: process.env.MAIL_FROM, // e-mail verificado no SES
    to: process.env.MAIL_TO || process.env.SMTP_USER,
    subject: `Contato do site - ${name}`,
    replyTo: email, // e-mail do usuário para resposta
    html
  });

  return info;
};
