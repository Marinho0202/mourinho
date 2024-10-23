// src/pages/Cadastro.js
import React, { useState } from 'react';
import './style/Cadastro.css';

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    dataNascimento: '',
    genero: 'Masculino',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o back-end usando uma requisição fetch ou axios.
    console.log('Dados do formulário:', formData);
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-form-container">
        <div className="logo">
          {/* Substitua pelo caminho da sua logo */}
          <img src="./img/logonareia.jpg" className="logo-img" />
        </div>
        <h2>Cadastro de Jogador</h2>
        <p>Vamos começar!</p>
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Nome completo"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu melhor e-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="(XX) x xxxx-xxxx"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="********"
              value={formData.senha}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input
              type="date"
              id="dataNascimento"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="genero">Gênero</label>
            <select
              id="genero"
              name="genero"
              value={formData.genero}
              onChange={handleChange}
            >
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
              <option value="Outro">Outro</option>
            </select>
          </div>
          <button type="submit" className="btn-cadastrar">Cadastrar</button>
        </form>
      </div>
      <div className="cadastro-image">
        {/* A imagem lateral será exibida aqui */}
        <img src="./img/cold.png"  className="image-lateral" />
      </div>
    </div>
  );
}

export default Cadastro;
