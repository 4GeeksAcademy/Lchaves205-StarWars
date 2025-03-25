import React, { useEffect, useState } from "react";
import { fetchData } from "../services/swapiService";

export const Species = () => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    const getSpecies = async () => {
      const data = await fetchData("species");
      console.log("Species Data:", data); // Verifica los datos obtenidos
      setSpecies(data);
    };

    getSpecies();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Species</h1>
      <div className="row g-4">
        {species.map((specie) => (
          <div className="col-md-4" key={specie.uid}>
            <div className="card shadow-sm">
              <img
                src="https://via.placeholder.com/400x300?text=Species+Image"
                alt={specie.name || "Unknown Species"}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{specie.name || "Unknown Species"}</h5>
                <p className="card-text">
                  Classification: {specie.properties?.classification || "Unknown"}
                </p>
                <p className="card-text">
                  Language: {specie.properties?.language || "Unknown"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};