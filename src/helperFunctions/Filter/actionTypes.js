const typesArray = [
    "CLEAR_ALL",
    "FILTER_BY_PRICE_RANGE",
    "SORT_BY",
    "FILTER_BY_FICTION",
    "FILTER_BY_NON_FICTION",
    "FILTER_BY_PHILOSOPHY",
    "FILTER_BY_FAMILY_AND_RELATIONSHIP",
    "FILTER_BY_SELF_HELP",
    "SORT_BY_RATING",
  ];
  
  const actionTypes = typesArray.reduce(
    (acc, type) => ({ ...acc, [type]: type }),
    {}
  );
  
  export { actionTypes };