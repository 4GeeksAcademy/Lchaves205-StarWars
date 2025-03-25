import React, { useEffect, useState } from "react";
import { fetchData } from "../services/swapiService";

export const Starships = () => {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const getStarships = async () => {
      const data = await fetchData("starships");
      console.log("Starships Data:", data); // Verifica los datos obtenidos
      setStarships(data);
    };

    getStarships();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Starships</h1>
      <div className="row g-4">
        {starships.map((starship) => (
          <div className="col-md-4" key={starship.uid}>
            <div className="card shadow-sm">
              <img
                src="https://via.placeholder.com/400x300?text=Starship+Image"
                alt={starship.name || "Unknown Starship"}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{starship.name || "Unknown Starship"}</h5>
                <p className="card-text">
                  Model: {starship.properties?.model || "Unknown Model"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};