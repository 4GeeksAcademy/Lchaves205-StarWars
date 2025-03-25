import React, { useEffect, useState } from "react";
import { fetchData } from "../services/swapiService";

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const getVehicles = async () => {
      const data = await fetchData("vehicles"); // Cambia el endpoint a "vehicles"
      setVehicles(data);
    };

    getVehicles();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Vehicles</h1>
      <div className="row g-4">
        {vehicles.map((vehicle) => (
          <div className="col-md-4" key={vehicle.uid}>
            <div className="card shadow-sm">
              <img
                src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                alt={vehicle.name}
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
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text">UID: {vehicle.uid}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};