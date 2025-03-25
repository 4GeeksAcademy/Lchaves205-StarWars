import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { EntityCard } from "../components/EntityCard";

export const Favorites = () => {
    const { store } = useContext(AppContext);

    return (
        <div className="container">
            <h1>Favorites</h1>
            {store.favorites.length === 0 ? (
                <p>No favorites added yet.</p>
            ) : (
                <div className="row">
                    {store.favorites.map((favorite) => (
                        <div className="col-md-4" key={favorite.uid}>
                            <EntityCard entity={favorite} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};