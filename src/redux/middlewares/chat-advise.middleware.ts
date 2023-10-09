import { AnyAction, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import io from "socket.io-client";
import { receiveMessage } from "../chat/chat.slice";

const chatAdvise = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => {
  const socket = io(`${import.meta.env.VITE_GATEWAY_SOCKET}/advise`);

  socket.on("receive_message", (data) => {
    store.dispatch(receiveMessage(data));
  });

  return (action: AnyAction) => {
    switch (action.type) {
      case "chat/addMessage": {
        socket.emit("chat", action.payload);
        break;
      }
    }
    return next(action);
  };
};

export default chatAdvise;
