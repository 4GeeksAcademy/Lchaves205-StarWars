const BASE_URL = "https://www.swapi.tech/api";

export const fetchData = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    if (!response.ok) throw new Error("Error fetching data");
    const data = await response.json();
    return data.results || []; // Devuelve un array vacío si no hay resultados
  } catch (error) {
    console.error("Error fetching data from SWAPI:", error);
    return []; // Devuelve un array vacío en caso de error
  }
};