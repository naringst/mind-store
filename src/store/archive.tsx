import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArchiveListType, NoteType } from "../types/NoteType";

const initialArchiveState: ArchiveListType = { archiveList: [] };
export const archiveSlice = createSlice({
  name: "archive",
  initialState: initialArchiveState,
  reducers: {
    addArchive(state, action: PayloadAction<NoteType>) {
      const newNote = action.payload;
      state.archiveList.push(newNote);
    },
    deleteArchive(state, action: PayloadAction<string>) {
      const deletedTrashList = state.archiveList.filter((note: NoteType) => {
        return note.id !== action.payload;
      });
      state.archiveList = deletedTrashList;
    },
    deleteAllArchive(state) {
      state.archiveList = [];
    },
  },
});
export const archiveActions = archiveSlice.actions;
