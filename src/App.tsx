import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/app";
import Home from "./pages/home";
import Notification from "./pages/notification";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
