import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import ProductsPage from './pages/ProductsPage/ProductsPage.jsx';
import Detalle from './pages/Detalle/Detalle.jsx';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/productos/:id" element={<Detalle />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;