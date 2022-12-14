import { createContext, useContext, useState } from "react";

  const DataStoreContext = createContext();

  const DataStoreProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  const [searchText, setSearchText] = useState("");

  const toastProps = {
    theme: "dark",
    closeOnClick: true,
    autoClose: 1000,
    pauseOnHover: true,
    position: "bottom-center",
  };

  setTimeout(() => {
    setShowLoader(false);
  }, 1500);

  return (
    <DataStoreContext.Provider
    value={{
      toastProps,
      showLoader,
      setShowLoader,
      categories,
      setCategories,
      products,
      setProducts,
      searchText,
      setSearchText,
    }}
    >
      {children}
    </DataStoreContext.Provider>
  );
};

const useDataStore = () => useContext(DataStoreContext);
export { DataStoreProvider, useDataStore };