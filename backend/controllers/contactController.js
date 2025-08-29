import { sendContactEmail } from '../services/emailService.js';

export const handleContactRequest = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Campos obrigatórios faltando.' });
    }

    const info = await sendContactEmail({ name, email, phone, message });

    res.json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Falha ao enviar e-mail.' });
  }
};
