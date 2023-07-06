import "./styles.scss"
import { Link, useNavigate } from "react-router-dom"
import React, { useState } from "react"
import { login } from "../../axios/api-calls"
import { useDispatch, useSelector } from "react-redux";
import { setMsg, resetMsg, setSuccess} from "../../redux/userRedux";

export function Login(){
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleLogin = async (e) => {
        e.preventDefault()

        login({ "email": email, "password": password })
        .then(response => {
          console.log(response.status)
          if (response.status === 201) {
            console.log(response.data)
            dispatch(setSuccess(response.data));
          }
          if (response.status === 200) {
            dispatch(setMsg("E-mail e/ou senhas inválidos!"));
            setTimeout(() => { dispatch(resetMsg()) }, 5000);
          } 
          if (response.status === 500) {
            dispatch(setMsg("Algo de errado aconteceu com a sua tentativa de login."));
            setTimeout(() => { dispatch(resetMsg()) }, 7000);
          }
        })
        .catch(error => {
          console.error(error);
        });
    };

    return(
        <div className="login-container">
            <div className="logo-container">
                <img src="https://media.discordapp.net/attachments/1095482147156000778/1098024242718707722/image_1.png" alt="" />
                <h1><b>SUA CONTA PARA TUDO NA REP</b></h1>
            </div>
            <React.Fragment>
              {user.showMsg && (
                <div className="error-container">
                  <div className="error-message">{user.errorMsg}</div>
                </div>
              )}
            </React.Fragment>
            <form className="login-form">
                <input 
                    type="email" placeholder="E-MAIL" value={email} required name="email" onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" placeholder="SENHA" value={password} required name="password" onChange={(e) => setPassword(e.target.value)}
                />
                <Link to={`/reset-password`}>Esqueceu a senha?</Link>
                <div className="submit-form">
                    <span>Ao fazer login, você concorda com a Política de privacidade e com os Termos de uso do rep.com.br</span>
                    <button type="submit" value="ENTRAR" className="login-submit" onClick={handleLogin}>ENTRAR</button>
                </div>
            </form>
            <span className="span-container">Não está cadastrado? <Link to={`/Register`}>Junte-se a nós.</Link></span>
        </div>
    )
}