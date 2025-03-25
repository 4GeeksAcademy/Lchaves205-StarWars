import React, { useEffect, useState } from "react";
import { fetchData } from "../services/swapiService";

export const Films = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      const data = await fetchData("films");
      console.log("Films Data:", data); // Verifica los datos obtenidos
      setFilms(data);
    };

    getFilms();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Films</h1>
      <div className="row g-4">
        {films.map((film) => (
          <div className="col-md-4" key={film.uid}>
            <div className="card shadow-sm">
              <img
                src="https://via.placeholder.com/400x300?text=Film+Image"
                alt={film.properties?.title || "Unknown Film"}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{film.properties?.title || "Unknown Film"}</h5>
                <p className="card-text">
                  Director: {film.properties?.director || "Unknown"}
                </p>
                <p className="card-text">
                  Release Date: {film.properties?.release_date || "Unknown"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};