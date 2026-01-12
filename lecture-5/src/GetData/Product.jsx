import React, { useEffect, useState } from "react";
import Card from "../component/Card";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    }
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {Array.isArray(products) &&
          products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <Card product={product} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
