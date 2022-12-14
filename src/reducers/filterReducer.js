const filterReducer = (state, action) => {
  switch (action.type) {
    case "SORT_BY":
      return { ...state, sortBy: action.payload };

    case "SET_CATEGORY":
      return {
        ...state,
        categories: { ...state.categories, [action.payload]: true },
      };

    case "FILTER_BY_FICTION":
      return {
        ...state,
        categories: { ...state.categories, Fiction: action.payload },
      };

    case "FILTER_BY_NON_FICTION":
      return {
        ...state,
        categories: { ...state.categories, Non_fiction: action.payload },
      };

    case "FILTER_BY_PHILOSOPHY":
      return {
        ...state,
        categories: { ...state.categories, Philosophy: action.payload },
      };

    case "FILTER_BY_FAMILY_AND_RELATIONSHIP":
      console.log("family");
      return {
        ...state,
        categories: {
          ...state.categories,
          Family_relationship: action.payload,
        },
      };

    case "FILTER_BY_SELF_HELP":
      return {
        ...state,
        categories: { ...state.categories, Self_help: action.payload },
      };

    case "SORT_BY_RATING":
      return {
        ...state,
        rating: Number(action.payload),
      };

    case "FILTER_BY_PRICE_RANGE":
      return {
        ...state,
        price: action.payload,
      };

    case "CLEAR_ALL":
      return action.payload;
  }
};

export { filterReducer };