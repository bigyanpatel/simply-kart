const getFilterByPrice = (data, price) => {
    if (price) {
      return [...data.filter((item) => item.sellPrice < price)];
    }
    return data;
  };
  
  export { getFilterByPrice };