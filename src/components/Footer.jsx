function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="footer">
        <p className="footer-text">© {currentYear} PWA App Shell - Aplicacion Web Progresiva</p>
        <p className="footer-subtitle">Funciona sin conexion gracias al Service Worker</p>
      </footer>
    );
  }
  
  export default Footer;