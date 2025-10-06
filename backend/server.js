const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
        user: process.env.SMTP_USER, // Usuário: colciclab@uesc.br
        pass: process.env.SMTP_PASS, // Senha de App de colciclab@uesc.br
    },
});

// Endpoint da API para enviar a reserva
app.post("/enviar-reserva", async (req, res) => {
    const { emailProfessor, corpoEmail } = req.body;

    if (!emailProfessor || !corpoEmail) {
        return res.status(400).json({ message: "Campos obrigatórios ausentes." });
    }

    const mailOptions = {
        from: `"Reserva de Laboratório" <${process.env.SMTP_USER}>`, // Remetente é o próprio colegiado
        to: process.env.SMTP_USER, // O destinatário é o próprio colegiado (para receber a notificação)
        
        // Se o colegiado clicar em "Responder", a resposta irá para o "professor"
        replyTo: emailProfessor, 

        subject: "Nova Solicitação de Reserva de Laboratório",
        text: corpoEmail,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Sua solicitação foi enviada com sucesso!" });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        res.status(500).json({ message: "Ocorreu um erro ao enviar sua solicitação. Tente novamente mais tarde." });
    }
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});