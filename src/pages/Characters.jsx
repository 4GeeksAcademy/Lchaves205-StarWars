import React, { useEffect, useState } from "react";
import { fetchData } from "../services/swapiService";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
  const getCharacters = async () => {
    const data = await fetchData("people");
    console.log("Characters Data:", data); // Verifica los datos obtenidos
    setCharacters(data);
  };

  getCharacters();
}, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Characters</h1>
      <div className="row g-4">
        {characters.map((character) => (
          <div className="col-md-4" key={character.uid}>
            <div className="card shadow-sm">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                alt={character.name}
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
                <h5 className="card-title">{character.name}</h5>
                <p className="card-text">UID: {character.uid}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};