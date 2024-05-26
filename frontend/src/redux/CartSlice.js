import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : { cartList: [], totalPrice: 0 };
};

const saveCartToStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const initialState = loadCartFromStorage();

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, price } = action.payload;
      const existingCartItem = state.cartList.find(item => item.id === id);

      if (existingCartItem) {
        existingCartItem.quantity++;
      } else {
        state.cartList.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += +price;
      saveCartToStorage(state);
    },
    removeFromCart: (state, action) => {
      const { id, price } = action.payload;
      const existingCartItemIndex = state.cartList.findIndex(item => item.id === id);

      if (existingCartItemIndex !== -1) {
        const existingCartItem = state.cartList[existingCartItemIndex];
        if (existingCartItem.quantity > 1) {
          existingCartItem.quantity--;
        } else {
          state.cartList.splice(existingCartItemIndex, 1);
        }
        state.totalPrice -= +price;
        saveCartToStorage(state);
      }
    },
    clearCart: (state) => {
      state.cartList = [];
      state.totalPrice = 0;
      saveCartToStorage({ cartList: [], totalPrice: 0 });
    },
    updateQuantityInCart: (state, action) => {
      const { id, newQty, oldQty, product } = action.payload;
      const existingCartItem = state.cartList.find(item => item.id === id);

      if (!existingCartItem) return;

      const diff = newQty - oldQty;
      existingCartItem.quantity = newQty;

      if (diff > 0) {
        existingCartItem.price += +product.price * +diff;
        state.totalPrice += +product.price * +diff;
      } else {
        const remainingQty = existingCartItem.quantity + diff;
        if (remainingQty < 1) {
          alert('The product cannot have a negative quantity');
          return;
        }
        existingCartItem.price -= +product.price * Math.abs(diff);
        state.totalPrice -= +product.price * Math.abs(diff);
        if (remainingQty === 0) {
          state.cartList = state.cartList.filter(item => item.id !== id);
        }
      }
      saveCartToStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantityInCart } = cartSlice.actions;
export default cartSlice.reducer;
