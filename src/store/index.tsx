import { createSlice, configureStore } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isModalOpen: false },
  reducers: {
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
  },
});
export const modalActions = modalSlice.actions;
export const store = configureStore({ reducer: { modal: modalSlice.reducer } });
