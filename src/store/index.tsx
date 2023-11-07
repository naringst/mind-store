import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

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
  initialState: { isTagModalOpen: false },
  reducers: {
    openTagModal(state) {
      state.isTagModalOpen = true;
    },
    closeTagModal(state) {
      state.isTagModalOpen = false;
    },
  },
});

export interface TagType {
  id: string;
  name: string;
}

export interface State {
  tagList: TagType[];
}

const initalTagState: State = { tagList: [] };

const tagSlice = createSlice({
  name: "tag",
  initialState: initalTagState,
  reducers: {
    createNewTag(state, action: PayloadAction<TagType>) {
      const newTag = action.payload;
      const newItem: TagType = {
        id: newTag.id,
        name: newTag.name,
      };
      state.tagList.push(newItem);
    },
    deleteTag(state, action) {
      const deleteIdx = state.tagList.findIndex(
        (item: TagType) => item.id === action.payload
      );

      state.tagList.splice(deleteIdx, 1);
    },
  },
});
export const modalActions = modalSlice.actions;
export const tagModalActions = tagModalSlice.actions;
export const tagActions = tagSlice.actions;

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    tagModal: tagModalSlice.reducer,
    tag: tagSlice.reducer,
  },
});
