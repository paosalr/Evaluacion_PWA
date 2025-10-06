import { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function() {
    function loadProducts() {
      const mockProducts = [
        { id: 1, name: 'Laptop HP', price: 15999, stock: 5, image: '💻' },
        { id: 2, name: 'Mouse Inalambrico', price: 299, stock: 15, image: '🖱️' },
        { id: 3, name: 'Teclado Mecanico', price: 899, stock: 8, image: '⌨️' },
        { id: 4, name: 'Monitor 24 pulgadas', price: 3499, stock: 3, image: '🖥️' },
        { id: 5, name: 'Audifonos Bluetooth', price: 599, stock: 12, image: '🎧' },
        { id: 6, name: 'Webcam HD', price: 799, stock: 7, image: '📷' },
        { id: 7, name: 'Disco Duro SSD 500GB', price: 1299, stock: 10, image: '💾' },
        { id: 8, name: 'Hub USB-C', price: 449, stock: 20, image: '🔌' }
      ];
      
      setTimeout(function() {
        setProducts(mockProducts);
        setLoading(false);
      }, 800);
    }

    loadProducts();
  }, []);

  function formatPrice(price) {
    return '$' + price.toLocaleString('es-MX');
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="loader"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      <h2 className="section-title">Catalogo de Productos</h2>
      <p className="section-subtitle">Selecciona tus productos favoritos</p>
      
      <div className="products-grid">
        {products.map(function(product) {
          return (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{formatPrice(product.price)}</p>
              <p className="product-stock">
                {product.stock > 0 ? 'Stock: ' + product.stock : 'Agotado'}
              </p>
              <button className="btn-add">Agregar al carrito</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;