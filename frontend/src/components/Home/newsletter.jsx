import React from "react";
import SendIcon from '@mui/icons-material/Send';
import "./styles/newsletter.scss"; 

function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="desc">ENTRE PARA O CLUBE E FIQUE POR DENTRO DAS NOVIDADES:</div>
      <div className="input-container">
        <input className="input" type="text" placeholder="Seu email" />
        <button className="button">
          <SendIcon style={{ color: "#000000", cursor: "pointer"}}/>
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
