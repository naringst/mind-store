import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteListType, NoteType } from "../types/NoteType";

const initialNoteState: NoteListType = {
  noteList: [],
  isEdit: false,
  updateNote: [],
};

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
    updateNote(state, action: PayloadAction<string>) {
      state.isEdit = true;
      state.updateNote = state.noteList.filter((note: NoteType) => {
        return note.id === action.payload;
      });
    },
    exitUpdateNote(state) {
      state.isEdit = false;
    },
    editNote(state, action: PayloadAction<NoteType>) {
      //노트 내용 수정 반영
      const updatedNote = action.payload;
      state.noteList = state.noteList.map((note: NoteType) => {
        return updatedNote.id === note.id ? updatedNote : note;
      });
    },
    setPinState(state, action: PayloadAction<[string, boolean]>) {
      state.noteList = state.noteList.map((note: any) =>
        note.id === action.payload[0]
          ? { ...note, pinned: action.payload[1] }
          : note
      );
    },

    setSortCategory(state, action: PayloadAction<string>) {
      if (action.payload === "lowFirst") {
        state.noteList = state.noteList.sort((a: any, b: any): number => {
          if (a.priority.length > b.priority.length) {
            return 1;
          }
          return -1;
        });
      }

      if (action.payload === "highFirst") {
        state.noteList = state.noteList.sort((a: any, b: any): number => {
          if (a.priority.length < b.priority.length) {
            return 1;
          }
          return -1;
        });
      }
      if (action.payload === "latest") {
        //오름차순 정렬 적용
        state.noteList = state.noteList.sort((a: any, b: any): number => {
          return (
            +new Date(b.createdTime).getTime() -
            +new Date(a.createdTime).getTime()
          );
        });
      }
      if (action.payload === "oldest") {
        //내림차순 정렬 적용
        state.noteList = state.noteList.sort((a: any, b: any): number => {
          return (
            +new Date(a.createdTime).getTime() -
            +new Date(b.createdTime).getTime()
          );
        });
      }
    },
  },
});

export const noteActions = noteSlice.actions;
