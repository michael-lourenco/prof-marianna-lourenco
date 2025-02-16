import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { name, email, subject, message } = req.body;

  console.log('REQ BODY', JSON.stringify(req.body));
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    // Configuração do transporte de e-mail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configuração do e-mail
    const mailOptions = {
      from: email,
      to: 'kontempler@gmail.com', // Destinatário
      subject: subject,
      text: `Nome: ${name}\nE-mail: ${email}\nMensagem: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ success: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message + 'Erro ao enviar e-mail.' });
  }
}
