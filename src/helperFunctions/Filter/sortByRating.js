const getRatingFilteredData = (data, rating) => {
    if (rating) {
      return [...data.filter((item) => item.ratings >= rating)];
    }
    return data;
  };
  
  export { getRatingFilteredData };