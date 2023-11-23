import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrashListType, NoteType } from "../types/NoteType";

const initialNoteState: TrashListType = { trashList: [] };
export const trashSlice = createSlice({
  name: "trash",
  initialState: initialNoteState,
  reducers: {
    addTrash(state, action: PayloadAction<NoteType>) {
      const newNote = action.payload;
      state.trashList.push(newNote);
    },
    deleteTrash(state, action: PayloadAction<string>) {
      //id를 활용해 삭제
      const deletedTrashList = state.trashList.filter((note: NoteType) => {
        return note.id !== action.payload;
      });
      state.trashList = deletedTrashList;
    },
    deleteAllTrash(state) {
      state.trashList = [];
    },
  },
});
export const trashActions = trashSlice.actions;
