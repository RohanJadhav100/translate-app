import { configureStore, createSlice } from "@reduxjs/toolkit";

export const translateSlice = createSlice({
  name: "Translate",
  initialState: { sourceText: "", targetText: "" },
  reducers: {
    translateText: (state, action) => {
      state.sourceText = action.payload.sourceText;
      state.targetText = action.payload.targetText;
    },
  },
});

export const store = configureStore({
  reducer: { translate: translateSlice.reducer },
});

export const textActions = translateSlice.actions;
