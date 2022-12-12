const decrementQuantity = (state, action) => {
    const { cartItems, bill, discount } = state;
    const { product, payload } = action;
  
    return {
      cartArray: payload,
      cartItems:
        product.quantity > 1
          ? cartItems.map((item) =>
              item._id === product._id
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
          : cartItems.filter((item) => item._id !== product._id),
      bill: bill - product.sellPrice,
      cartStatus: cartItems.length,
      discount: parseInt(
        discount - (product.discount * Number(product.sellPrice)) / 100
      ),
    };
  };
  
  export { decrementQuantity };