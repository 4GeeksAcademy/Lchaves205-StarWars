import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Characters } from "./pages/Characters";
import { Planets } from "./pages/Planets";
import { Vehicles } from "./pages/Vehicles";
import { Films } from "./pages/Films";
import { Species } from "./pages/Species";
import { Starships } from "./pages/Starships";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/characters", element: <Characters /> },
  { path: "/planets", element: <Planets /> },
  { path: "/vehicles", element: <Vehicles /> },
  { path: "/films", element: <Films /> },
  { path: "/species", element: <Species /> },
  { path: "/starships", element: <Starships /> },
]);