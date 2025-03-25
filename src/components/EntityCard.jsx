// filepath: /workspaces/Lchaves205-StarWars/src/components/EntityCard.jsx
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const EntityCard = ({ entity }) => {
  const { store, dispatch } = useContext(AppContext);

  const isFavorite = store.favorites.some((fav) => fav.uid === entity.uid);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "remove_favorite", payload: entity });
    } else {
      dispatch({ type: "add_favorite", payload: entity });
    }
  };

  return (
    <div className="card">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${entity.uid}.jpg`}
        alt={entity.name}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{entity.name}</h5>
        <button className="btn btn-primary" onClick={handleFavorite}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};