import "./styles.scss"

import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import CodeIcon from '@mui/icons-material/Code';

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

import { registerUser, checkEmail, confirmationEmail, codeEmail} from "../../axios/api-calls"

import { useDispatch, useSelector } from "react-redux";
import { setMsg, resetMsg, setSucess, resetSucess } from "../../redux/registerRedux";

function generateRandomCode() {
  let code = "";
  const possibleDigits = "0123456789";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 10);
    const randomDigit = possibleDigits[randomIndex];
    code += randomDigit;
  }
  return code;
}

export function Register(){
  const register = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateRegistration = () => {
    const nameRegex = /^[a-zA-Z\s]{3,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
      dispatch(setMsg("O seu nome deve ter pelo menos três caracteres (sem números ou símbolos especiais)."));
      setTimeout(() => { dispatch(resetMsg()) }, 5500)

      return false;
    }
    if (lastName.length === 0) {
      dispatch(setMsg("Por gentileza, insira o seu sobrenome."));
      setTimeout(() => { dispatch(resetMsg()) }, 5500)

      return false;
    }
    if (!emailRegex.test(email)) {
      dispatch(setMsg("O email precisa ter pelo menos cinco caracteres e estar com a formatação correta."));
      setTimeout(() => { dispatch(resetMsg()) }, 5500)

      return false;
    }
    if (password.length < 5) {
      dispatch(setMsg("A sua senha deve ter pelo menos cinco caracteres."));
      setTimeout(() => { dispatch(resetMsg()) }, 5500)

      return false;
    }
    return true;
  }

  const registerButton = (e) => {
    e.preventDefault();
    if (validateRegistration() && code === false) {
      const randomCode = generateRandomCode();
      setCode(randomCode);
      console.log("CODE",code)
    }
  };

  // Lógica dos códigos enviados ao e-mail:
  const [code, setCode] = useState(false);

  const [showEmailConfirmationMessage, setEmailConfirmationMessage] = useState(false); // Exibir caixa de código
  const [codeEmailConfirmation, setEmailConfirmationCode] = useState(""); // código a ser digitado

  useEffect(() => {
    testCode();
  }, [code]);

  const testCode = () => {
    if (code != false){
      const testEmail = checkEmail({"email":email});

      testEmail.then(response => {
        if (response.status === 200){
          codeEmail({"email":email, "code":code});
          setEmailConfirmationMessage(true);
        } else {
          dispatch(setMsg("Já existe uma conta registrada com este e-mail. Por gentileza, insira um e-mail válido!"));
          setTimeout(() => { dispatch(resetMsg()) }, 7000)
          restartRegister()
        }}
        ).catch(error => {
          console.error(error)});
      }
  };

  function restartRegister() {
    setCode(false);
    setEmailConfirmationMessage(false);
    setEmailConfirmationCode("");
    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }

  const checkEmailConfirmation = () => {
    console.log(code, codeEmailConfirmation)
    if (code === codeEmailConfirmation) {
      const tryRegister = registerUser({"name":name, "lastname":lastName, "email":email, "password":password})

      tryRegister.then(response => {
        if (response.status === 201){
          confirmationEmail({"name":name, "email":email})
          restartRegister()
          dispatch(setSucess());
          setTimeout(() => { dispatch(resetSucess()) }, 5500)

        } else {
          dispatch(setMsg("Algo de errado aconteceu com o seu cadastro, certifique-se que não há uma conta já cadastrada com o e-mail informado e tente novamente."));
          setTimeout(() => { dispatch(resetMsg()) }, 7000)
          restartRegister()
        }}

      ).catch(error => {
        console.error(error)});
    }

    else {
      dispatch(setMsg("Infelizmente o código informado é inválido."));
      setTimeout(() => { dispatch(resetMsg()) }, 5500)
    }
  };

  const cancelRegister = () => {
    setCode(false)
    setEmailConfirmationMessage(false);
    dispatch(resetMsg());
  }

  return(
    <div className="register-container">
      <main className="register-content">
        <div className="register">

          <Link to={`/`} style={{color: 'inherit', textDecoration: 'none'}}>
            <img className="logo" src="https://i.ibb.co/thQcBw8/image-1.png"></img>
          </Link>

          <h1 className="title">TORNE-SE UM MEMBRO DA REP</h1>

          <form className="form-space">

            <React.Fragment>
              {register.sucess && (
                <div className="sucess-container">
                  <div className="sucess-message">Sua conta foi criada com sucesso!</div>
                </div>
              )}
            </React.Fragment>

            <form className="input-container">
              <PersonIcon style={{ color: "#C5C5C5", marginLeft: "5px"}}/>
              <input className="input" value={name} placeholder="Nome" onChange={(e) => setName(e.target.value)}></input>
            </form>

            <form className="input-container">
              <PersonIcon style={{ color: "#C5C5C5", marginLeft: "5px"}}/>
              <input className="input" value={lastName} placeholder="Sobrenome" onChange={(e) => setLastName(e.target.value)}></input>
            </form>

            <form className="input-container">
              <EmailIcon style={{ color: "#C5C5C5", marginLeft: "5px"}}/>
              <input className="input" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></input>
            </form>

            <form className="input-container">
              <LockIcon style={{ color: "#C5C5C5", marginLeft: "5px"}}/>
              <input className="input" value={password} type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}></input>
            </form>

            <React.Fragment>
              {register.showMsg && (
                <div className="error-container">
                  <div className="error-message">{register.errorMsg}</div>
                </div>
              )}
            </React.Fragment>

            <div className="confirmation-container" style={showEmailConfirmationMessage ? { display: 'flex' } : { display: 'none' }}>
              <div className="confirmation-message">Insira o código que foi enviado para o seu e-mail:</div>
              <form className="input-container" style={{width:"50%"}}>
                <CodeIcon style={{ color: "#C5C5C5", marginLeft: "5px"}}/>
                <input className="input" value={codeEmailConfirmation} placeholder="Código" onChange={(e) => setEmailConfirmationCode(e.target.value)}></input>
              </form>

              <div className="confirmation-buttons">
                <div className="confirmation-button" style={{backgroundColor:"green"}} onClick={checkEmailConfirmation}>Confirmar</div>
                <div className="confirmation-button" style={{backgroundColor:"red"}} onClick={cancelRegister}>Cancelar</div>
              </div>
            </div>

            <button className="button" onClick={registerButton}>CADASTRAR-SE</button>
            
            <span className="span-container">Já possui uma conta? <Link to={`/login`} style={{color: "black", fontWeight: "bold", textDecoration: 'none', margin: '10px 0'}}>Entre na sua conta</Link></span>

          </form>

        </div>
      </main>
    </div>
  )
}