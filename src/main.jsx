// filepath: /workspaces/Lchaves205-StarWars/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { AppProvider } from './context/AppContext';


const Main = () => {
    return (
        <React.StrictMode>
            <AppProvider>
                <RouterProvider router={router} />
            </AppProvider>
        </React.StrictMode>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);