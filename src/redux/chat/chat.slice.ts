import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message, Prettify } from "@/utils/types";

export interface EChatState {
  advises: Message[];
}
const initialState: EChatState = {
  advises: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (
      state,
      action: PayloadAction<Prettify<Message & { file: number | null }>>
    ) => {
      const { type, content } = action.payload;
      state.advises.push({ type, content });
    },
    receiveMessage: (state, action: PayloadAction<Message>) => {
      state.advises.push(action.payload);
    },
  },
});

export const { addMessage, receiveMessage } = chatSlice.actions;

export default chatSlice.reducer;
