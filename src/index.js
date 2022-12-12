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
import { CartProvider } from "./contexts/CartContext";

// Call make Server
makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <CartProvider>
          <WishListProvider>
            <FilterProvider>
              <DataStoreProvider>
                <App />
              </DataStoreProvider>
            </FilterProvider>
          </WishListProvider>
        </CartProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>,
);