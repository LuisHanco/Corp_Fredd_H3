import React, { useState, useEffect } from 'react';

// Importación de datos estáticos
import { PRODUCTOS, CATALOGOS } from './data/products';

// Importación de componentes generales
import Header from './components/Header';
import Footer from './components/Footer';
import CotizacionModal from './components/CotizacionModal';

// Importación de vistas independientes
import HomeView from './views/HomeView';
import NosotrosView from './views/NosotrosView';
import ProductosView from './views/ProductosView';
import DetailView from './views/DetailView';
import CatalogosView from './views/CatalogosView';
import ContactoView from './views/ContactoView'; 

// Imagenes de Banner
import img1 from './assets/banner/1211.webp';
import img2 from './assets/banner/1212.webp';
import img3 from './assets/banner/1213.webp';
import img4 from './assets/banner/1214.webp';

export default function App() {
  const [currentPage, setCurrentPage] = useState('inicio');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTOS[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('todas');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTabDetalle, setActiveTabDetalle] = useState('especificaciones');
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      titulo: 'Agua Caliente (PPR)',
      subtitulo: 'Nuestra línea de tuberías y conexiones de PPR (Polipropileno) está diseñada para soportar altas temperaturas y presiones sin deformarse.',
      img: img1
    },
    {
      titulo: 'Agua Fría y Desagüe',
      subtitulo: 'Soluciones integrales en tuberías y conexiones de PVC de alta calidad, diseñadas para optimizar la conducción de agua potable y la evacuación eficiente de fluidos.',
      img: img2
    },
    {
      titulo: 'Tanques y Biodigestores',
      subtitulo: 'Soluciones eficientes para el cuidado del agua y el medio ambiente.',
      img: img3
    },
    {
      titulo: 'Electrobombas',
      subtitulo: 'Diseñadas para un rendimiento superior, las electrobombas H3 Max aseguran un abastecimiento de agua constante y eficiente en hogares, comercios e industrias.',
      img: img4
    }
  ];

  // Efecto para escuchar el botón "Atrás" del navegador[cite: 3]
  useEffect(() => {
    const manejarRetrocesoNativo = (event) => {
      if (event.state && event.state.vista) {
        setCurrentPage(event.state.vista);
        if (event.state.producto) {
          setSelectedProduct(event.state.producto);
        }
      } else {
        setCurrentPage('inicio');
      }
    };

    window.addEventListener('popstate', manejarRetrocesoNativo);
    return () => window.removeEventListener('popstate', manejarRetrocesoNativo);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const [contactoForm, setContactoForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [cotizadorForm, setCotizadorForm] = useState({ producto: '', medida: '', cantidad: '10', nombre: '', correo: '', telefono: '' });
  const [enviandoContacto, setEnviandoContacto] = useState(false);
  const [enviadoContactoExito, setEnviadoContactoExito] = useState(false);
  const [enviandoCotizacion, setEnviandoCotizacion] = useState(false);
  const [enviadoCotizacionExito, setEnviadoCotizacionExito] = useState(false);
  const [cotizacionModalOpen, setCotizacionModalOpen] = useState(false);

  // Función navegarA actualizada para registrar el historial[cite: 3]
  const navegarA = (pagina, producto = null) => {
    window.history.pushState(
      { vista: pagina, producto: producto }, 
      ''
    );
    
    setCurrentPage(pagina);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
    
    if (producto) {
      setSelectedProduct(producto);
      setActiveImgIndex(0);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      setCurrentPage('productos');
      setActiveCategoryFilter('todas');
    }
  };

  const resetFiltros = () => {
    setActiveCategoryFilter('todas');
    setSearchQuery('');
  };

  const submitContacto = (e) => {
    e.preventDefault();
    setEnviandoContacto(true);
    const numeroWhatsApp = "51995464610";
    const textoMensaje = `*NUEVO MENSAJE DESDE LA PÁGINA WEB* \n\n*Nombre:* ${contactoForm.nombre}\n*Correo:* ${contactoForm.email}\n\n*Mensaje:* ${contactoForm.mensaje}`;
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensaje)}`;

    setTimeout(() => {
      setEnviandoContacto(false);
      setEnviadoContactoExito(true);
      window.open(urlWhatsApp, '_blank');
      setContactoForm({ nombre: '', email: '', mensaje: '' });
      setTimeout(() => setEnviadoContactoExito(false), 5000);
    }, 800);
  };

  const submitCotizacion = (e) => {
    e.preventDefault();
    setEnviandoCotizacion(true);
    const numeroWhatsApp = "51995464610";
    const textoMensaje = `*NUEVA SOLICITUD DE COTIZACIÓN* \n\n*Producto:* ${cotizadorForm.producto}\n*Medida:* ${cotizadorForm.medida}\n*Cantidad:* ${cotizadorForm.cantidad} unidades\n*Datos:* ${cotizadorForm.nombre}, ${cotizadorForm.telefono}`;
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensaje)}`;

    setTimeout(() => {
      setEnviandoCotizacion(false);
      setEnviadoCotizacionExito(true);
      window.open(urlWhatsApp, '_blank');
      setCotizadorForm({ producto: '', medida: '', cantidad: '10', nombre: '', correo: '', telefono: '' });
      setTimeout(() => {
        setEnviadoCotizacionExito(false);
        setCotizacionModalOpen(false);
      }, 3000);
    }, 800);
  };

  const productosFiltrados = PRODUCTOS.filter(p => {
    const coincideCategoria = activeCategoryFilter === 'todas' || p.categoria === activeCategoryFilter;
    const coincideBusqueda = p.nombre.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             p.marca.toLowerCase().includes(searchQuery.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <div className="min-h-screen bg-[#1A1D1E] text-white flex flex-col font-sans selection:bg-[#F2741D] selection:text-white">
      
      <Header 
        currentPage={currentPage}
        navegarA={navegarA}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="flex-grow">
        {currentPage === 'inicio' && (
          <HomeView 
            slides={slides}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            navegarA={navegarA}
            setActiveCategoryFilter={setActiveCategoryFilter}
          />
        )}

        {currentPage === 'nosotros' && (
          <NosotrosView navegarA={navegarA} />
        )}

        {currentPage === 'productos' && (
          <ProductosView 
            productosFiltrados={productosFiltrados}
            activeCategoryFilter={activeCategoryFilter}
            setActiveCategoryFilter={setActiveCategoryFilter}
            navegarA={navegarA}
            resetFiltros={resetFiltros}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {currentPage === 'producto-detalle' && selectedProduct && (
          <DetailView 
            selectedProduct={selectedProduct}
            activeImgIndex={activeImgIndex}
            setActiveImgIndex={setActiveImgIndex}
            activeTabDetalle={activeTabDetalle}
            setActiveTabDetalle={setActiveTabDetalle}
            setCotizadorForm={setCotizadorForm}
            setCotizacionModalOpen={setCotizacionModalOpen}
            navegarA={navegarA}
          />
        )}

        {currentPage === 'catalogos' && (
          <CatalogosView CATALOGOS={CATALOGOS} />
        )}

        {currentPage === 'contacto' && (
          <ContactoView 
            contactoForm={contactoForm}
            setContactoForm={setContactoForm}
            enviadoContactoExito={enviadoContactoExito}
            submitContacto={submitContacto}
            enviandoContacto={enviandoContacto}
          />
        )}
      </main>

      <Footer navegarA={navegarA} setActiveCategoryFilter={setActiveCategoryFilter} />

      <CotizacionModal 
        cotizacionModalOpen={cotizacionModalOpen}
        setCotizacionModalOpen={setCotizacionModalOpen}
        cotizadorForm={cotizadorForm}
        setCotizadorForm={setCotizadorForm}
        enviadoCotizacionExito={enviadoCotizacionExito}
        submitCotizacion={submitCotizacion}
        enviandoCotizacion={enviandoCotizacion}
      />

    </div>
  );
}