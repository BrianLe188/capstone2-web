import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app";
import Home from "./pages/home";
import Notification from "./pages/notification";
import ChatBox from "./pages/chatBox";
import Login from "@/pages/login";

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
          path: "/notification",
          element: <Notification />,
        },
        {
          path: "/admissions-chat-gpt",
          element: <ChatBox />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
