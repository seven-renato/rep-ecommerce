const router = require("express").Router();
require('dotenv').config({path:'vars.env'});

const nodemailer = require("nodemailer");

// Configuração do nodemailer com as informações do nosso email:
const transporter = nodemailer.createTransport({
    host: `${process.env.EMAIL_HOST}`,         // smtp do gmail
    port: process.env.EMAIL_PORT,              // rota padrão
    secure: false,
    auth: {
      user: `${process.env.EMAIL_NAME}`,       // email
      pass: `${process.env.EMAIL_PASSWORD}`,   // senha
    },
    tls: {
        rejectUnauthorized: false,
      },
});

router.post("/confirmation", (req, res) => {
    // Crio o corpo do email (origem, destinatário, assunto e o conteúdo do e-mail):
    const mailOptions = {
        from: `${process.env.EMAIL_NAME}`,
        to: req.body.email,
        subject: "Confirmação de Registro",
        text: `Obrigado por se registrar, ${req.body.name}. Sua conta foi criada com sucesso!`          // aqui vai o HTML
      };
    
      // Tento usar o "transporter" do Nodemailer pra enviar o e-mail automaticamente:
      try {
        transporter.sendMail(mailOptions);
        res.status(201).json();
      } catch (error) {
        res.status(500).json(error);
      }

});

router.post('/send-code', (req, res) => {
    // Crio o corpo do email (origem, destinatário, assunto e o conteúdo do e-mail):
    const mailOptions = {
        from: `${process.env.EMAIL_NAME}`,
        to: req.body.email,
        subject: "Confirmação de Registro",
        text: `Código de verificação: ${req.body.code}. Use este código para se registrar no site!`    // aqui vai o HTML
      };
    
      // Tento usar o "transporter" do Nodemailer pra enviar o e-mail automaticamente:
      try {
        transporter.sendMail(mailOptions);
        res.status(201).json();
      } catch (error) {
        console.error(error);
        res.status(500).json(error);
      }

});

module.exports = router;