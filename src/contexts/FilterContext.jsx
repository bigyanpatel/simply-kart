import { createContext, useContext, useReducer } from "react";
import { initialState } from "../helperFunctions/Filter/inititalFilter";
import { filterReducer } from "../reducers/filterReducer";

const FilterContext = createContext({});

const FilterProvider = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(filterReducer, initialState);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };