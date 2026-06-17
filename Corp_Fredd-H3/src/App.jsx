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

import img1 from './assets/banner/1211.jpg';
import img2 from './assets/banner/1212.jpg';
import img3 from './assets/banner/1213.jpg';
import img4 from './assets/banner/1214.jpg';

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
      titulo: 'Más de 32 años haciendo historia',
      subtitulo: 'Líderes en importación y distribución de conexiones industriales de alta resistencia y termoplásticos.',
      img: img1
    },
    {
      titulo: 'Conexiones de Alta Performance',
      subtitulo: 'Suministramos la más alta calidad en tuberías, bridas y accesorios.',
      img: img2
    },
    {
      titulo: 'Más de 32 años haciendo historia',
      subtitulo: 'Líderes en importación y distribución de conexiones industriales de alta resistencia y termoplásticos.',
      img: img3
    },
    {
      titulo: 'Más de 32 años haciendo historia',
      subtitulo: 'Líderes en importación y distribución de conexiones industriales de alta resistencia y termoplásticos.',
      img: img4
    }
  ];

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

  const navegarA = (pagina, producto = null) => {
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

  // =========================================================================
  // INTEGRACIÓN CON WHATSAPP: FORMULARIO DE CONTACTO
  // =========================================================================
  const submitContacto = (e) => {
    e.preventDefault();
    setEnviandoContacto(true);
    
    // 1. Número de destino (Código de país + número, sin signos ni espacios)
    const numeroWhatsApp = "51995464610"; // <-- ¡CAMBIA ESTE NÚMERO POR EL TUYO!

    // 2. Construimos el mensaje con formato (asteriscos para negritas en WhatsApp)
    const textoMensaje = 
`*NUEVO MENSAJE DESDE LA PÁGINA WEB* 🌐

*Nombre:* ${contactoForm.nombre}
*Correo:* ${contactoForm.email}

*Mensaje / Requerimiento:*
${contactoForm.mensaje}`;

    // 3. Codificamos el texto para que la URL lo entienda correctamente
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensaje)}`;

    // 4. Simulamos una breve carga visual para el usuario y abrimos WhatsApp
    setTimeout(() => {
      setEnviandoContacto(false);
      setEnviadoContactoExito(true);
      
      // Abrir WhatsApp en una pestaña nueva
      window.open(urlWhatsApp, '_blank');
      
      // Limpiar el formulario
      setContactoForm({ nombre: '', email: '', mensaje: '' });
      setTimeout(() => setEnviadoContactoExito(false), 5000);
    }, 800);
  };

  // =========================================================================
  // INTEGRACIÓN CON WHATSAPP: MODAL DE COTIZACIÓN
  // =========================================================================
  const submitCotizacion = (e) => {
    e.preventDefault();
    setEnviandoCotizacion(true);

    // 1. Número de destino
    const numeroWhatsApp = "51995464610"; // <-- ¡CAMBIA ESTE NÚMERO POR EL TUYO!

    // 2. Construimos el mensaje técnico para cotizar
    const textoMensaje = 
`*NUEVA SOLICITUD DE COTIZACIÓN* 🛠️

*Detalles del Material:*
• *Producto:* ${cotizadorForm.producto}
• *Medida:* ${cotizadorForm.medida}
• *Cantidad Estimada:* ${cotizadorForm.cantidad} unidades

*Datos del Cliente:*
• *Nombre:* ${cotizadorForm.nombre}
• *Teléfono:* ${cotizadorForm.telefono}
• *Correo:* ${cotizadorForm.correo}

Hola, quisiera recibir una cotización formal sobre este requerimiento.`;

    // 3. Codificamos y creamos el enlace
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoMensaje)}`;

    // 4. Procesamos y abrimos WhatsApp
    setTimeout(() => {
      setEnviandoCotizacion(false);
      setEnviadoCotizacionExito(true);
      
      // Abrir WhatsApp en una pestaña nueva
      window.open(urlWhatsApp, '_blank');
      
      setCotizadorForm({ producto: '', medida: '', cantidad: '10', nombre: '', correo: '', telefono: '' });
      setTimeout(() => {
        setEnviadoCotizacionExito(false);
        setCotizacionModalOpen(false); // Cierra el modal automáticamente
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
            searchQuery={searchQuery}       // <-- NUEVO: Sincroniza el texto
            setSearchQuery={setSearchQuery} // <-- NUEVO: Modifica la búsqueda
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