// src/pages/Catalogue.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Catalogue.css";

const Catalogue = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="catalogue-container">
  <h1 className="catalogue-title">Catalogue CyberShop</h1>
  <input
    type="text"
    className="search-input"
    placeholder="Recherche..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <div className="products-grid">
    {filtered.map(p => (
      <div key={p.id} className="product-card">
        <img src={`http://127.0.0.1:8000${p.image}`} alt={p.name} />
        <h2>{p.name}</h2>
        <p>{p.description}</p>
        <p className="price">{p.price} €</p>
        <button className="add-to-cart-btn">Ajouter au panier</button>
      </div>
    ))}
  </div>
</div>

    );
};


export default Catalogue;
