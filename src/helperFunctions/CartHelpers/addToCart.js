const addToCart = (state, action) => {
    const { cartItems, cartStatus, bill, discount } = state;
    const { product, payload } = action;
    const isProductExist = cartItems.find((item) => item._id === product._id);
  
    return {
      cartItems: !isProductExist
        ? [...cartItems, { ...product, quantity: 1 }]
        : cartItems.map((item) =>
            item._id === product._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
      cartArray: [...payload],
      bill: bill + Number(product.sellPrice),
      cartStatus: !isProductExist ? cartStatus + 1 : cartStatus,
      discount: parseInt(
        discount + (product.discount * Number(product.sellPrice)) / 100
      ),
    };
  };
  
  export { addToCart };