import { createContext, useContext, useState } from "react";

const DataStoreContext = createContext();

const DataStoreProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <DataStoreContext.Provider
      value={{ categories, setCategories, products, setProducts }}
    >
      {children}
    </DataStoreContext.Provider>
  );
};

const useDataStore = () => useContext(DataStoreContext);
export { DataStoreProvider, useDataStore };