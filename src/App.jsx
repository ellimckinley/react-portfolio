import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import '../src/styles.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Homepage';
import PortfolioPage from './pages/Portfoliopage';
import ContactPage from './pages/Contactpage';
import ResumePage from './pages/Resumepage';

function App() {
  return (
    <Router>
      <div className="App bg-primary-custom text-main-custom">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;