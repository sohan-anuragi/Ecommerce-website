import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Routes/AppLayout.jsx";
import Home from "./Pages/Home/Home.jsx";
import SignUpPage from "./Pages/ProfilePages/SignUp.jsx";
import LoginPage from "./Pages/ProfilePages/LoginPage.jsx";
import ForgetPage from "./Pages/ProfilePages/ForgetPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home /> },
      { path: "/sign-up", element: <SignUpPage></SignUpPage> },
      { path: "/sign-in", element: <LoginPage></LoginPage> },
      { path: "/forget-password", element: <ForgetPage></ForgetPage> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
