import "./styles.scss"

import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import CodeIcon from '@mui/icons-material/Code';

import { Link } from "react-router-dom"

export function Register(){
    return(
      <div className="register-container">
        <main className="register-content">
          <div className="register">

            <img className="logo" src="https://i.ibb.co/thQcBw8/image-1.png"></img>
            
            <h1 className="title">TORNE-SE UM MEMBRO DA REP</h1>

            <form className="form-space">

              <form className="input-container">
                <PersonIcon style={{ color: "#C5C5C5"}}/>
                <input className="input" placeholder="Nome"></input>
              </form>

              <form className="input-container">
                <PersonIcon style={{ color: "#C5C5C5"}}/>
                <input className="input" placeholder="Sobrenome"></input>
              </form>

              <form className="input-container">
                <EmailIcon style={{ color: "#C5C5C5"}}/>
                <input className="input" placeholder="E-mail"></input>
              </form>

              <form className="input-container">
                <LockIcon style={{ color: "#C5C5C5"}}/>
                <input className="input" type="password" placeholder="Senha"></input>
              </form>

              <div className="alert-container">
                <div className="alert-message">Teste de mensagem de erro!</div>
              </div>

              <div className="confirmation-container">
                <div className="confirmation-message">Insira o código que foi enviado para o seu e-mail:</div>
                <form className="input-container" style={{width:"50%"}}>
                  <CodeIcon style={{ color: "#C5C5C5"}}/>
                  <input className="input" placeholder="Código"></input>
                </form>

                <div className="confirmation-buttons">
                  <div className="confirmation-button" style={{backgroundColor:"green"}}>Confirmar</div>
                  <div className="confirmation-button" style={{backgroundColor:"red"}}>Cancelar</div>
                </div>
              </div>

              <button className="button">CADASTRAR-SE</button>
              
              <span className="span-container">Já possui uma conta? <Link to={`/login`} style={{color: "black", fontWeight: "bold", textDecoration: 'none', margin: '10px 0'}}>Entre na sua conta</Link></span>

            </form>

          </div>
        </main>
      </div>
    )
}