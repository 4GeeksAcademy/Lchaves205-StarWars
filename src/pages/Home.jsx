import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Star Wars Explorer</h1>
      <div className="row g-4">
        {/* Card para Personajes */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://starwars-visualguide.com/assets/img/categories/characters.jpg"
              alt="Characters"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Characters</h5>
              <p className="card-text">Explore all Star Wars characters.</p>
              <Link to="/characters" className="btn btn-primary">
                View Characters
              </Link>
            </div>
          </div>
        </div>

        {/* Card para Vehículos */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg"
              alt="Vehicles"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Vehicles</h5>
              <p className="card-text">Discover all Star Wars vehicles.</p>
              <Link to="/vehicles" className="btn btn-primary">
                View Vehicles
              </Link>
            </div>
          </div>
        </div>

        {/* Card para Planetas */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://starwars-visualguide.com/assets/img/categories/planets.jpg"
              alt="Planets"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Planets</h5>
              <p className="card-text">Explore all Star Wars planets.</p>
              <Link to="/planets" className="btn btn-primary">
                View Planets
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://via.placeholder.com/400x300?text=Films"
              alt="Films"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Films</h5>
              <p className="card-text">Explore all Star Wars films.</p>
              <Link to="/films" className="btn btn-primary">
                View Films
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://via.placeholder.com/400x300?text=Species"
              alt="Species"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Species</h5>
              <p className="card-text">Discover all Star Wars species.</p>
              <Link to="/species" className="btn btn-primary">
                View Species
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <img
              src="https://via.placeholder.com/400x300?text=Starships"
              alt="Starships"
              className="card-img-top"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Starships</h5>
              <p className="card-text">Explore all Star Wars starships.</p>
              <Link to="/starships" className="btn btn-primary">
                View Starships
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};