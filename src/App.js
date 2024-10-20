import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Torneios from './pages/Torneios';
import Agendamentos from './pages/Agendamentos';
import Aulas from './pages/Aulas';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/torneios" element={<Torneios />} />
          <Route path="/agendamentos" element={<Agendamentos />} />
          <Route path="/aulas" element={<Aulas />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//set NODE_OPTIONS=--openssl-legacy-provider