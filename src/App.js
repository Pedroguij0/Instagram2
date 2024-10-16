import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './home';
import LoginModal from './loginmodel';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false); // Estado para controlar o modal

  // Função para abrir e fechar o modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <button onClick={toggleModal}>Login</button> {/* Botão para abrir o modal */}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      {showModal && <LoginModal closeModal={toggleModal} />}

      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
