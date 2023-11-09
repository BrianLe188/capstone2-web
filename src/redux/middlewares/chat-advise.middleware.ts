import { AnyAction, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import io from "socket.io-client";
import { assignToken, receiveMessage } from "../chat/chat.slice";

const token = window.localStorage.getItem("token");
const socket = io(`${import.meta.env.VITE_GATEWAY_SOCKET}/advise`, {
  extraHeaders: {
    token: token || "",
  },
});
const chatAdvise = (store: MiddlewareAPI) => (next: Dispatch<AnyAction>) => {
  socket.emit("assign_socket", {});

  socket.on("assign_token", (_token) => {
    localStorage.setItem("token", _token);
    store.dispatch(assignToken({ token: _token }));
  });

  socket.on("receive_message", (data) => {
    console.log(data);
    store.dispatch(receiveMessage(data));
  });

  socket.on("someone_connect_to_room", (data) => {
    console.log(data);
  });

  socket.on("someone_leave_out_room", (data) => {
    console.log(data);
  });

  return (action: AnyAction) => {
    switch (action.type) {
      case "chat/addMessage": {
        socket.emit("chat", {
          ...action.payload,
          token: localStorage.getItem("token"),
        });
        break;
      }
      case "chat/connectRoom": {
        socket.emit("connect_room", {
          ...action.payload,
          token: localStorage.getItem("token"),
        });
        break;
      }
      case "chat/leaveRoom": {
        socket.emit("leave_room", {
          ...action.payload,
          token: localStorage.getItem("token"),
        });
      }
    }
    return next(action);
  };
};

export default chatAdvise;
