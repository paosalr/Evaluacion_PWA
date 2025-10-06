function Menu(props) {
    return (
      <nav className="menu">
        <button 
          className={props.view === 'productos' ? 'menu-item active' : 'menu-item'}
          onClick={function() { props.setView('productos'); }}
        >
          Productos
        </button>
        <button 
          className={props.view === 'acerca' ? 'menu-item active' : 'menu-item'}
          onClick={function() { props.setView('acerca'); }}
        >
          Acerca de
        </button>
      </nav>
    );
  }
  
  export default Menu;