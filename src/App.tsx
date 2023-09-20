import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app";
import Home from "./pages/home";
import Notification from "./pages/notification";
import ChatBox from "./pages/chatBox";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/thong-bao",
          element: <Notification />,
        },
        {
          path: "/admissions-chat-gpt",
          element: <ChatBox />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
