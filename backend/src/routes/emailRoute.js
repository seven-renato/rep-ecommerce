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
        html: `<!DOCTYPE html>
        <html>
        
          <head >
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width">
            <title>replit</title>

            <style>
              body{
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-direction: column;
              }
              .preto{
                background-color: black;
                height: 8px;
                width: 50%;
              }      
              .preto1{
                  background-color: black;
                  height: 8px;
                  width: 50%;
                  color:wheat;
              }
              p{
                  line-height: 150%;
                  text-align: justify;
              }
              .barra{
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-items: center;
                  height: 100px;
                  width:50%;
                  background-color: black;  
              }
          
              .texto{
                  font-family: Arial, Helvetica, sans-serif;
                  text-align: left;
                  font-size: 14px;
                  line-height: 1.6em;
              }
            </style>

          </head>
          
          <body>
            <div class ='barra'> <img src="https://cdn.discordapp.com/attachments/1123390722503094362/1124076510542839978/logo_1.png" width="150" height="60" ></div>
            <div class = 'texto'>
              <p>Olá, ${req.body.name}</p>
              
              <p>Agradecemos pela sua inscrição em nosso site!</p>
              
              <p>Estamos felizes em tê-lo(a) como parte da nossa comunidade.</p>
              
              <p>Seu cadastro foi recebido com sucesso e estamos processando suas informações.<br>Em breve, você receberá um e-mail de confirmação com mais detalhes sobre sua inscrição e os próximos passos.</p>
              
              <p>Enquanto isso, aproveite para explorar os recursos e conteúdos disponíveis em nosso site.<br>Estamos constantemente atualizando nosso conteúdo para fornecer a melhor experiência possível aos nossos usuários.</p>
              
              <p>Se surgirem dúvidas ou se precisar de assistência, não hesite em entrar em contato conosco. Estamos aqui para ajudar.</p>
              
              <p>Obrigado por se juntar a nós!<br>Esperamos que você aproveite sua jornada em nosso site.</p>
              
              Atenciosamente,<br>Equipe do REP.
              <p></p>
            </div>
            <div class="preto1"> </div>
          </body>
        </html>`
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
        <body border="none" style="margin: 0; padding: 0;">
          <table class="outer table" align="center" border="none" cellpadding="0" cellspacing="0" width="600">
            <tr class="banner">
              <td align="center" bgcolor="#000000" style="padding: 40px 0 30px 0; font-size:2em">
                <img src="https://cdn.discordapp.com/attachments/1123390722503094362/1124076510542839978/logo_1.png" width="150" height="60" >
              </td>
            </tr>
            <tr class="content">
              <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                <table border="none" cellpadding="0" cellspacing="0" width="100%">
                  
                  <tr>
                    <td>REP Co.</td>
                  </tr>

                  <tr border="none">
                    <td style="padding:20px 0px 30px 0px;" border="none">
                      <p>Olá, ${req.body.name}</p>
              
                      <p>Agradecemos pela sua inscrição em nosso site!</p>
                      
                      <p>Estamos felizes em tê-lo(a) como parte da nossa comunidade.</p>
                      
                      <p>Seu cadastro foi realizado com sucesso. Aproveite para explorar os recursos e conteúdos disponíveis em nosso site, estamos constantemente atualizando nosso conteúdo para fornecer a melhor experiência possível aos nossos usuários..</p>
                      
                      <p>Se surgirem dúvidas ou se precisar de assistência, não hesite em entrar em contato conosco. Estamos aqui para lhe ajudar!</p>
                      
                      <p>Obrigado por se juntar a nós!<br>Esperamos que você aproveite sua jornada em nosso site.</p>
                      
                      Atenciosamente,<br>Equipe REP.
                    </td>
                  </tr>
          
                </table>
              </td>
            </tr>
            <tr class="footer">
              
              <td bgcolor="#000000" style="padding: 30px 30px 30px 30px;">
                <table border="none" cellpadding="0" cellspacing="0" width="100%">
                  <tr border="none">
                    <td width="75%" color="#ffffff">
                      &reg; REP Co., 2023
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        
        
        
        
        `    // aqui vai o HTML
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