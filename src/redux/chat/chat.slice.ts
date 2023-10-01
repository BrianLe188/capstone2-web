import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message } from "@/utils/types";

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
    addMessage: (state, action: PayloadAction<Message>) => {
      state.advises.push(action.payload);
    },
    receiveMessage: (state, action: PayloadAction<Message>) => {
      state.advises.push(action.payload);
    },
  },
});

export const { addMessage, receiveMessage } = chatSlice.actions;

export default chatSlice.reducer;
