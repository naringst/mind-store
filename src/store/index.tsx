import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { addedTagsSlice, tagSlice } from "./tag";
import { noteSlice } from "./note";
import { useDispatch } from "react-redux";
import { NoteType } from "../types/NoteType";
import { trashSlice } from "./trash";
import { archiveSlice } from "./archive";

//노트 생성 모달
const modalSlice = createSlice({
  name: "modal",
  initialState: { isModalOpen: false, isEdit: false },
  reducers: {
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
    openUpdateModal(state, action: PayloadAction<NoteType>) {
      state.isModalOpen = true;
      state.isEdit = true;
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

const sortModalSlice = createSlice({
  name: "sortModal",
  initialState: { isSortModalOpen: false, sortOption: "" },
  reducers: {
    openSortModal(state) {
      state.isSortModalOpen = true;
    },
    closeSortModal(state) {
      state.isSortModalOpen = false;
    },
    setSortOption(state, action: PayloadAction<string>) {
      state.sortOption = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;
export const tagModalActions = tagModalSlice.actions;
export const sortModalActions = sortModalSlice.actions;

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    tagModal: tagModalSlice.reducer,
    sortModal: sortModalSlice.reducer,
    tag: tagSlice.reducer,
    addedTag: addedTagsSlice.reducer,
    note: noteSlice.reducer,
    trash: trashSlice.reducer,
    archive: archiveSlice.reducer,
  },
});
