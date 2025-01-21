import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./routes/mainPage/mainPage";
import Dashboard from "./routes/dashboard/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
