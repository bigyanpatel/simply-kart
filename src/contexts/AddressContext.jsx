import {
    createContext,
    useReducer,
    useContext,
    useEffect,
    useState,
  } from "react";
  import { getAddressHandler } from "../handlers/addressHandlers";
  import { addressReducer } from "../reducers/addressReducer";
  import { useAuth } from "./AuthContext";
  
  const AddressContext = createContext();
  
  const initialState = {
    addresses: [],
  };
  
  const defaultAddress = {
    name: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
    mobile: "",
  };
  
  const dummyAddress = {
    name: "albella karigar",
    street: "d-a1, NeoRoad",
    city: "banglore",
    state: "karnatak",
    country: "india",
    zipCode: 101010,
    mobile: 8592001380,
  };
  
  const AddressProvider = ({ children }) => {
    const [addressState, addressDispatch] = useReducer(
      addressReducer,
      initialState
    );
    const [showForm, setShowForm] = useState(false);
  
    const [address, setAddress] = useState({
      name: "",
      street: "",
      city: "",
      state: "",
      country: "",
      zipCode: "",
      mobile: "",
    });
    const { token } = useAuth();
  
    useEffect(() => {
      getAddressHandler(token, addressDispatch);
    }, []);
  
    return (
      <AddressContext.Provider
        value={{
          showForm,
          setShowForm,
          dummyAddress,
          defaultAddress,
          address,
          setAddress,
          addressState,
          addressDispatch,
        }}
      >
        {children}
      </AddressContext.Provider>
    );
  };
  
  const useAddress = () => useContext(AddressContext);
  
  export { useAddress, AddressProvider };