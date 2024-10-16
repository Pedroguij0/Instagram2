import React, { useState } from "react";
import axios from "axios";

function LoginModel({ closeModal }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, senha });
      console.log(response.data);
      if (response.data.message === 'Login efetuado com sucesso') {
        closeModal();
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage('Erro no login, tente novamente.');
    }
  };

  return (
    <div className="login">
      <div className="login-content">
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default LoginModel;
