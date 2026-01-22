import { useState } from "react";
import { products } from "./data";
import Navbar from "./components/Navbar";
import ProductCard from "./components/Productcard";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  return (
    <>
      <Navbar />

      <div className="layout">
        {/* Products */}
        <div className="products">
          <h3>Products</h3>
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              addToCart={addToCart}
            />
          ))}
        </div>

        {/* Cart */}
        <Cart cart={cart} removeItem={removeItem} />
      </div>

      {/* ===== CSS ===== */}
      <style>{`
        * { box-sizing: border-box; font-family: Arial; }
        body { margin: 0; background: #f4f6f8; }

        .navbar {
          padding: 14px 24px;
          font-size: 20px;
          font-weight: bold;
          background: white;
          border-bottom: 1px solid #ddd;
        }

        .layout {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
          padding: 20px;
        }

        .products, .cart-box {
          background: white;
          padding: 16px;
          border-radius: 6px;
        }
          .product-card img {
           width: 100%;
           height: 400px;
           object-fit: cover;
           border-radius: 6px;
           margin-bottom: 8px;
           }


       .product-card {
          border: 1px solid #ddd;
          padding: 14px;
          border-radius: 6px;
          margin-bottom: 12px;
        }

        .product-card button {
          background: #0d6efd;
          color: white;
          border: none;
          padding: 6px 10px;
          border-radius: 4px;
          cursor: pointer;
        }

        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 10px 0;
        }

        .cart-item button {
          background: #0d6efd;
          color: white;
          border: none;
          padding: 4px 8px;
          border-radius: 4px;
          cursor: pointer;
        }

        h3 { margin-bottom: 12px; }

        @media (max-width: 768px) {
          .layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
