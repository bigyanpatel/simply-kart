import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { DataStoreProvider } from "./contexts/DataStoreContext";
import { FilterProvider } from "./contexts/FilterContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import { WishListProvider } from "./contexts/WishListContext";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <WishListProvider>
          <FilterProvider>
            <DataStoreProvider>
              <App />
            </DataStoreProvider>
          </FilterProvider>
        </WishListProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
);