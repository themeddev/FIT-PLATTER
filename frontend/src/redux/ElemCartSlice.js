import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
  const storedMenu = localStorage.getItem('elemMenuCart');
  return storedMenu ? JSON.parse(storedMenu) : { MenuList: [], totalPrice: 0 };
};

const saveCartToStorage = (MenuList) => {
  localStorage.setItem('elemMenuCart', JSON.stringify(MenuList));
};

const initialState = loadCartFromStorage();

const ElemCartMenu = createSlice({
  name: 'ElemMenu',
  initialState,
  reducers: {
    addToCartMenu: (state, action) => {
      const { id, price } = action.payload;
      const existingMenuItem = state.MenuList.find(item => item.id === id);

      if (existingMenuItem) {
        existingMenuItem.quantity++;
      } else {
        state.MenuList.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += +price;
      saveCartToStorage(state);
    },
    removeFromCartMenu: (state, action) => {
      const { id, price } = action.payload;
      const existingMenuItemIndex = state.MenuList.findIndex(item => item.id === id);

      if (existingMenuItemIndex !== -1) {
        const existingMenuItem = state.MenuList[existingMenuItemIndex];
        if (existingMenuItem.quantity > 1) {
          existingMenuItem.quantity--;
        } else {
          state.MenuList.splice(existingMenuItemIndex, 1);
        }
        state.totalPrice -= +price;
        saveCartToStorage(state);
      }
    },
    clearCartMenu: (state) => {
      state.MenuList = [];
      state.totalPrice = 0; // Update total price to 0 when clearing the cart
      saveCartToStorage({ MenuList: [], totalPrice: 0 });
    },
  },
});

export const { addToCartMenu, removeFromCartMenu, clearCartMenu } = ElemCartMenu.actions;
export default ElemCartMenu.reducer;
