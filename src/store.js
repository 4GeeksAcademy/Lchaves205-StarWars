export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
    ],
    favorites: [], // Lista de favoritos
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "add_task":
      const { id, color } = action.payload;
      return {
        ...store,
        todos: store.todos.map((todo) =>
          todo.id === id ? { ...todo, background: color } : todo
        ),
      };

    case "add_favorite": // Agregar a favoritos
      return {
        ...store,
        favorites: [...store.favorites, action.payload],
      };

    case "remove_favorite": // Eliminar de favoritos
      return {
        ...store,
        favorites: store.favorites.filter(
          (fav) => fav.uid !== action.payload.uid
        ),
      };

    default:
      throw Error("Unknown action.");
  }
}