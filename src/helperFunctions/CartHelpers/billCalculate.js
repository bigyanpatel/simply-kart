const billCalculate = (cartData) => {
    const result = cartData.reduce(
      (acc, item) => ({
        currentPrice: acc.currentPrice + Number(item.sellPrice) * item.qty,
        discountPrice:
          acc.discountPrice +
          Math.floor((Number(item.discount) * Number(item.sellPrice)) / 100),
      }),
      {
        currentPrice: 0,
        discountPrice: 0,
      }
    );
    return result;
  };
  
  export { billCalculate };