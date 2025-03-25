// filepath: /workspaces/Lchaves205-StarWars/src/context/AppContext.jsx
import React, { createContext, useReducer } from "react";
import storeReducer, { initialStore } from "../store";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [store, dispatch] = useReducer(storeReducer, initialStore());

    return (
        <AppContext.Provider value={{ store, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};