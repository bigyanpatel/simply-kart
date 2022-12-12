const getSortedData = (data, sortBy) => {
    if (sortBy && sortBy === "LOW_TO_HIGH") {
      return [...data.sort((a, b) => a.sellPrice - b.sellPrice)];
    }
    if (sortBy && sortBy === "HIGH_TO_LOW") {
      return [...data.sort((a, b) => b.sellPrice - a.sellPrice)];
    }
    return data;
  };
  
  export { getSortedData };