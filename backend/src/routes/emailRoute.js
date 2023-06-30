const router = require("express").Router();
require('dotenv').config({path:'vars.env'});

const nodemailer = require("nodemailer");
const htmlToText = require('nodemailer-html-to-text').htmlToText;

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
        html: `
      <body style="margin: 0; padding: 0;">
        <table class="outer table" style="border-spacing: 15px;" align="center" border="0" cellpadding="0" cellspacing="0" width="600" >
          <tr class="banner">
            <td align="center" bgcolor="#ffffff" style="border: 0.5px solid #000000; font-size: 2em; padding: 10px 0px 0px 0px; border-radius: 5px;">
              <img src="https://i.ibb.co/thQcBw8/image-1.png" width="150" height="60" >
            </td>
          </tr>
          <tr class="content">
            <td style="padding: 15px 15px; border: 0.5px solid #CECECE; border-radius: 5px;" bgcolor="#ffffff">
              <table border="0" width="100%">
                <tr>
                  <td>
                    Olá, ${req.body.name}

                    <p align="justify" style="color: #000000;">Seu cadastro foi realizado com sucesso, obrigado por se juntar a nós!</p>

                    <p align="justify" tyle="color: #000000;">Estamos felizes em tê-lo(a) como parte da nossa comunidade e esperamos que você aproveite sua jornada em nosso site!</p>

                    <p align="justify" tyle="color: #000000;">Não deixe de explorar os produtos e os recursos disponíveis em nossa loja, estamos constantemente atualizando nosso conteúdo para fornecer a melhor experiência possível aos nossos usuários.</p>

                    <p align="justify" tyle="color: #000000;">Se surgirem dúvidas ou se precisar de assistência, não hesite em entrar em contato conosco. Estamos aqui para lhe ajudar!</p>

                    Atenciosamente,
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr class="footer">
            <td align="center" bgcolor="#000000" style="padding: 1px 0px; font-size: 1em; border-radius: 5px;">
              <p style="color: #ffffff;">&reg; REP Co. 2023</p>
            </td>
          </tr>
        </table>
      </body>`
      };
    
      // Tento usar o "transporter" do Nodemailer pra enviar o e-mail automaticamente:
      try {
        transporter.use('compile', htmlToText());
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
        html:`
        <body style="margin: 0; padding: 0;">
          <table class="outer table" style="border-spacing: 15px;" align="center" border="0" cellpadding="0" cellspacing="0" width="600" >
            <tr class="banner">
              <td align="center" bgcolor="#ffffff" style="border: 0.5px solid #000000; font-size: 2em; padding: 10px 0px 0px 0px; border-radius: 5px;">
                <img src="https://i.ibb.co/thQcBw8/image-1.png" width="150" height="60" >
              </td>
            </tr>
            <tr class="content">
              <td style="padding: 0px 15px; border: 0.5px solid #CECECE; border-radius: 5px;" bgcolor="#ffffff">
                <table border="0" width="100%">
                  <tr>
                    <td>
                      <p align="center" style="color: #000000; font-size: 20px; font-weight: bold;">Use o código abaixo para completar o cadastro no nosso site:</p>
                
                      <div style="width: 300px; border: none; border-radius: 5px; background-color: #8ABDFF; color: white; font-size: 30px; font-weight: bold; text-align: center; margin: 0 auto;">
                        <div align="center" style="padding: 10px 0px 10px 0px;">${req.body.code}</div>
                      </div>

                      <br>

                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr class="footer">
              <td align="center" bgcolor="#000000" style="padding: 1px 0px; font-size: 1em; border-radius: 5px;">
                <p style="color: #ffffff;">&reg; REP Co. 2023</p>
              </td>
            </tr>
          </table>
        </body>`    // aqui vai o HTML
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