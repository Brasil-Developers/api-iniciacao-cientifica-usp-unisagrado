let nodemailer = require("nodemailer");
export class EmailHelper {
    private transporter: any;
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.smtp_host || 'smtp.mailtrap.io',
            port: process.env.smtp_port || 2525,
            secure: false,
            debug: true,
            logger: true,
            auth: {
                user: process.env.smtp_user || '872e6423ef33c7',
                pass: process.env.smtp_pass || 'c5881ffc538294'
            },
            tls: {
                // do not fail on invalid certs
                rejectUnauthorized: false
            }
        });

        this.transporter.verify(function (error: Error, success: any) {
            if (error) {
                console.log(error);
            } else {
                console.log("[Email]: Server is ready to take our messages");
            }
        });
    }

    async retornaEmailRedefinirSenha(data: any): Promise<string> {
        let html = require("fs").readFileSync( __dirname + "/template-email-redefinir-senha.html", 'utf8');
        html.replace("{USUARIO}",  data.usuario ?? "" )
        html.replace("{EMAIL}", data.login)
        html.replace("{SENHA}",  data.senha )
        return html
    }
    async send(toEmail: string, subject: string, html: string) {

        return new Promise((resolve, reject) => {

            const mailOptions = {
                from: process.env.smtp_user || '872e6423ef33c7', // sender address
                to: toEmail, // list of receivers
                subject: subject, // Subject line
                html: html
            };

            this.transporter.sendMail(mailOptions, function (error: Error, success: any) {
                if (error) {
                    reject(error)
                } else {
                    resolve({
                        message: 'Para redefinir sua senha, insira no campo abaixo o e-mail cadastrado no sistema. Assim que enviar a solicitação para redefinição de senha, dê uma olhadinha na sua caixa de e-mail. :)'
                    })
                }
            });
        })
    }
}