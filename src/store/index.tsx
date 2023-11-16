import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import { NoteListType, NoteType } from "../components/types/NoteType";

export interface TagType {
  id: string;
  name: string;
}

export interface State {
  tagList: TagType[];
}

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

export interface AddedTagType {
  addedTagList: string[];
}

const initalAddedTagState: AddedTagType = { addedTagList: [] };

const addedTagsSlice = createSlice({
  name: "addedTag",
  initialState: initalAddedTagState,
  reducers: {
    addTag(state, action: PayloadAction<string>) {
      const newTag = action.payload;
      state.addedTagList.push(newTag);
    },
    deleteTag(state, action: PayloadAction<string>) {
      const deletedList = state.addedTagList.filter((item: string) => {
        return item !== action.payload;
      });
      state.addedTagList = deletedList;
    },
    deleteAllTag(state) {
      state.addedTagList = [];
    },
  },
});

const initialNoteState: NoteListType = { noteList: [] };

const noteSlice = createSlice({
  name: "note",
  initialState: initialNoteState,
  reducers: {
    addNote(state, action: PayloadAction<NoteType>) {
      const newNote = action.payload;
      state.noteList.push(newNote);
    },
    deleteNote(state, action: PayloadAction<string>) {
      //id를 활용해 삭제
      const deletedList = state.noteList.filter((note: NoteType) => {
        return note.id !== action.payload;
      });
      state.noteList = deletedList;
    },
    deleteAllNote(state) {
      state.noteList = [];
    },
    setPinState(state, action: PayloadAction<[string, boolean]>) {
      state.noteList = state.noteList.map((note: any) =>
        note.id === action.payload[0]
          ? { ...note, pinned: action.payload[1] }
          : note
      );
    },
  },
});

export const modalActions = modalSlice.actions;
export const tagModalActions = tagModalSlice.actions;
export const tagActions = tagSlice.actions;
export const addedTagsActions = addedTagsSlice.actions;
export const noteActions = noteSlice.actions;
export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    tagModal: tagModalSlice.reducer,
    tag: tagSlice.reducer,
    addedTag: addedTagsSlice.reducer,
    note: noteSlice.reducer,
  },
});
