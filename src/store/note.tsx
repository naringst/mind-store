import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteListType, NoteType } from "../components/types/NoteType";

const initialNoteState: NoteListType = { noteList: [] };

export const noteSlice = createSlice({
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

export const noteActions = noteSlice.actions;
