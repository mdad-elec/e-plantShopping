import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add item to the cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.name === item.name); // Check if item already exists

      if (existingItem) {
        // If item exists, increase its quantity
        existingItem.quantity += 1; // Increment quantity by 1
      } else {
        // If item doesn't exist, add it to the cart with quantity
        state.items.push({ ...item, quantity: 1 }); // Set initial quantity to 1
      }
    },
    
    // Remove item from the cart
    removeItem: (state, action) => {
      const itemToRemove = action.payload;
      state.items = state.items.filter((item) => item.name !== itemToRemove.name); // Filter out the item
    },

    // Update the quantity of an item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const item = state.items.find((item) => item.name === name);

      if (item) {
        // If the item exists, update its quantity
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;