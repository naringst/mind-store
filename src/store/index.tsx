import { createSlice, configureStore } from "@reduxjs/toolkit";
import { addedTagsSlice, tagSlice } from "./tag";
import { noteSlice } from "./note";

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

const tagModalSlice = createSlice({
  name: "tagModal",
  initialState: { isTagModalOpen: false, isAddTagModalOpen: false },
  reducers: {
    openTagModal(state) {
      state.isTagModalOpen = true;
    },
    closeTagModal(state) {
      state.isTagModalOpen = false;
    },
    openAddTagModal(state) {
      state.isAddTagModalOpen = true;
    },
    closeAddTagModal(state) {
      state.isAddTagModalOpen = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export const tagModalActions = tagModalSlice.actions;

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    tagModal: tagModalSlice.reducer,
    tag: tagSlice.reducer,
    addedTag: addedTagsSlice.reducer,
    note: noteSlice.reducer,
  },
});
