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
      <h2>Cadastro de Jogador</h2>
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
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
  );
}

export default Cadastro;
