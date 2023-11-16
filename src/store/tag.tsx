import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TagType {
  id: string;
  name: string;
}

export interface State {
  tagList: TagType[];
}

export const initalTagState: State = { tagList: [] };

export const tagSlice = createSlice({
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

export const addedTagsSlice = createSlice({
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

export const tagActions = tagSlice.actions;
export const addedTagsActions = addedTagsSlice.actions;
