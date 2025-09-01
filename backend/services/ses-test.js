import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'email-smtp.sa-east-1.amazonaws.com', // ajuste para sua região SES
  port: 465,
  secure: true,
  auth: {
    user: 'AKIATI7NQ6HHSGTJOSUG', // AKIA...
    pass: 'BH9w7DPrXcMKtrXXyX45/jbs8uajalPnhbuagt2xH4w/'
  }
});

const mailOptions = {
  from: '"Teste SES" <no-reply@codeonesolutions.com.br>', // e-mail verificado no SES
  to: 'destino@codeonesolutions.com.br', // destinatário (verificado se SES está em sandbox)
  subject: 'Teste SES via Nodemailer',
  text: 'Este é um teste de envio via Amazon SES SMTP.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Erro:', error);
  }
  console.log('E-mail enviado:', info.response);
});