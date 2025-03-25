import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"; // Para obtener parámetros de la URL y navegación
import { fetchData } from "../services/swapiService"; // Servicio para consumir SWAPI

export const Single = () => {
  const { theId } = useParams(); // Obtiene el parámetro dinámico de la URL
  const [item, setItem] = useState(null); // Estado para almacenar los detalles del elemento
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  useEffect(() => {
    const getItem = async () => {
      setLoading(true); // Activa el estado de carga
      const data = await fetchData(`people/${theId}`); // Cambia "people" según la entidad que necesites
      setItem(data); // Guarda los datos en el estado
      setLoading(false); // Desactiva el estado de carga
    };

    getItem(); // Llama a la función al montar el componente
  }, [theId]);

  if (loading) {
    return <p>Loading...</p>; // Muestra un mensaje mientras se cargan los datos
  }

  if (!item) {
    return <p>Item not found.</p>; // Muestra un mensaje si no se encuentra el elemento
  }

  return (
    <div className="container text-center">
      <h1 className="display-4">{item.properties.name}</h1>
      <hr className="my-4" />
      <p><strong>Height:</strong> {item.properties.height}</p>
      <p><strong>Mass:</strong> {item.properties.mass}</p>
      <p><strong>Gender:</strong> {item.properties.gender}</p>
      <p><strong>Birth Year:</strong> {item.properties.birth_year}</p>

      <Link to="/">
        <span className="btn btn-primary btn-lg" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};