import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Message, Prettify } from "@/utils/types";
import { fetchMessageByTarget } from "./chat.async";

export interface EChatState {
  messages: Message[];
  token: string;
  someone_typing: boolean;
}
const initialState: EChatState = {
  messages: [],
  token: "",
  someone_typing: false,
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
    typing: (_state, _action) => {},
    hideTyping: (state, _action) => {
      state.someone_typing = false;
    },
    someoneTyping: (state, _action) => {
      state.someone_typing = true;
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
  typing,
  hideTyping,
  someoneTyping,
} = chatSlice.actions;

export default chatSlice.reducer;
