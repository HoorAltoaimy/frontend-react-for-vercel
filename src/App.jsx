import React, { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://backend-express-server-for-vercel.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      {products.length > 0 &&
        products.map((product) => (
          <article key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </article>
        ))}
    </div>
  );
};

export default App;
