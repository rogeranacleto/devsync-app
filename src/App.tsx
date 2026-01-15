import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

export const router = createBrowserRouter([
  {
    element: <Home/>,
    path: "/"
  },
  {
    element: <Signup/>,
    path: "/signup"
  },
  {
    element: <Login/>,
    path: "/login"
  }
])