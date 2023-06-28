import "./styles.scss"
import { Link } from "react-router-dom"

export function Login(){
    return(
        <div className="login-container">
            <div className="logo-container">
                <img src="https://media.discordapp.net/attachments/1095482147156000778/1098024242718707722/image_1.png" alt="" />
                <h1><b>SUA CONTA PARA TUDO NA REP</b></h1>
            </div>
            <form action="POST" className="login-form">
                <input type="text" placeholder="E-MAIL"/>
                <input type="text" placeholder="SENHA"/>
                <Link to={`/reset-password`}>Esqueceu a senha?</Link>
                <div className="submit-form">
                    <span>Ao fazer login, você concorda com a Política de privacidade e com os Termos de uso do rep.com.br</span>
                    <input type="submit" value="ENTRAR" className="login-submit"/>
                </div>
            </form>
            <span className="span-container">Não está cadastrado? <Link to={`/Register`}>Junte-se a nós.</Link></span>
        </div>
    )
}