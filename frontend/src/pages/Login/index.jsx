import "./styles.scss"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { login } from "../../axios/api-calls"

export function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        const validate = await login({"email": email, "password": password})
        if (validate) {
            navigate("/profile")
        }
    }

    return(
        <div className="login-container">
            <div className="logo-container">
                <img src="https://media.discordapp.net/attachments/1095482147156000778/1098024242718707722/image_1.png" alt="" />
                <h1><b>SUA CONTA PARA TUDO NA REP</b></h1>
            </div>
            <form className="login-form">
                <input 
                    type="email" placeholder="E-MAIL" required name="email" onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" placeholder="SENHA" required name="password" onChange={(e) => setPassword(e.target.value)}
                />
                <Link to={`/reset-password`}>Esqueceu a senha?</Link>
                <div className="submit-form">
                    <span>Ao fazer login, você concorda com a Política de privacidade e com os Termos de uso do rep.com.br</span>
                    <button type="submit" value="ENTRAR" className="login-submit" onClick={(e) => handleLogin(e)}>ENTRAR</button>
                </div>
            </form>
            <span className="span-container">Não está cadastrado? <Link to={`/Register`}>Junte-se a nós.</Link></span>
        </div>
    )
}