import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = "https://fake-store-api.mock.beeceptor.com/api/products";
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
      console.log(result);
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map((value, index) => (
        <div className="card" key={index}>
          <img src={value.image} alt={value.name} className="card-img" />
          <div className="card-body">
            <h3 className="card-title">{value.name}</h3>
            <p className="card-description">{value.description}</p>
            <p className="card-price">${value.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
