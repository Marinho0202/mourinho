// src/pages/Login.js
import React from 'react';
import './style/login.css'; // Certifique-se de que o arquivo CSS está corretamente vinculado

function Login() {
  return (
    <div className="login-container">
      <header className="login-header">
        <img src="https://i.imgur.com/Ol5wbAL.jpeg" alt="Logo Nareia" className="logo-top" />
      </header>

      <div className="login-content">
        <div className="logo-side">
          <img src="https://i.imgur.com/Ol5wbAL.jpeg" alt="Logo Nareia" className="logo-side-image" />
        </div>

        <div className="login-form-container">
          <h2>SUA CONTA</h2>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email ou nome de usuário</label>
              <input type="text" id="email" name="email" placeholder="Email ou nome de usuário" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" name="password" placeholder="Senha" />
            </div>
            <div className="form-footer">
              <a href="/forgot-password" className="forgot-password">Esqueci a senha</a>
            </div>
            <button type="submit" className="btn-login">Entrar</button>
          </form>
          <div className="register-link">
            <p>Não possui uma conta?</p>
            <a href="/register" className="btn-register">Cadastrar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
