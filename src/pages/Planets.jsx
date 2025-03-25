import React, { useEffect, useState } from "react";
import { fetchData } from "../services/swapiService";

export const Planets = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const data = await fetchData("planets"); // Cambia el endpoint a "planets"
      setPlanets(data);
    };

    getPlanets();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Planets</h1>
      <div className="row g-4">
        {planets.map((planet) => (
          <div className="col-md-4" key={planet.uid}>
            <div className="card shadow-sm">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`}
                alt={planet.name}
                className="card-img-top"
                onError={(e) => {
                    if (!e.target.dataset.fallback) {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=No+Image";
                      e.target.dataset.fallback = "true"; // Marca que ya se usó la imagen de marcador de posición
                    }
                  }}
                />
              <div className="card-body">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">UID: {planet.uid}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};