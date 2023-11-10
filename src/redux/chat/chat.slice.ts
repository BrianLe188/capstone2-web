import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message, Prettify } from "@/utils/types";
import { fetchMessageByTarget } from "./chat.async";

export interface EChatState {
  messages: Message[];
  token: string;
}
const initialState: EChatState = {
  messages: [],
  token: "",
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (
      state,
      action: PayloadAction<
        Partial<
          Prettify<Message & { file: string | null; target: string | null }>
        >
      >
    ) => {
      console.log(state, action);
    },
    receiveMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    connectRoom: (state, action: PayloadAction<{ target: string }>) => {
      console.log(state, action);
    },
    leaveRoom: (state, action: PayloadAction<{ target: string }>) => {
      console.log(state, action);
    },
    assignToken: (state, action: PayloadAction<{ token: string }>) => {
      state.token = action.payload.token;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchMessageByTarget.fulfilled,
      (state, action: PayloadAction<Message[]>) => {
        state.messages = action.payload;
      }
    );
  },
});

export const {
  addMessage,
  receiveMessage,
  connectRoom,
  leaveRoom,
  assignToken,
} = chatSlice.actions;

export default chatSlice.reducer;
