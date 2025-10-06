function Header(props) {
    return (
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">🛒 Tienda PWA</h1>
          <div className="status-indicator">
            <span className={props.isOnline ? 'status-dot online' : 'status-dot offline'}></span>
            <span className="status-text">
              {props.isOnline ? 'En linea' : 'Sin conexion'}
            </span>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;