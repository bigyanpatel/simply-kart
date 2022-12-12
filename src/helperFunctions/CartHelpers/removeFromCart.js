const removeFromCart = (state, action) => {
    const { cartItems, cartStatus, bill, discount } = state;
    const { cartItem, payload } = action;
    cartItem.isCartItem = false;
  
    return {
      cartItems: cartItems.filter((item) => item._id !== cartItem._id),
      cartArray: [...payload],
      bill: bill - Number(cartItem.sellPrice) * cartItem.quantity,
      cartStatus: cartStatus - 1,
      discount: parseInt(
        discount - (cartItem.discount * Number(cartItem.sellPrice)) / 100
      ),
    };
  };
  
  export { removeFromCart };