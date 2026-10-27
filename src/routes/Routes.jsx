import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Games from "../pages/Games";
import GameDetails from "../pages/GameDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../pages/Blogs";
import UpdateProfile from "../pages/UpdateProfile";

const fetchGames = async () => {
  const res = await fetch("/games.json");
  return res.json();
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    hydrateFallbackElement: <p className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-xl"></span></p>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: fetchGames,
      },
      {
        path: "/games",
        element: <Games />,
        loader: fetchGames,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/gameDetails/:id",
        element: (
          <PrivateRoute>
            <GameDetails />
          </PrivateRoute>
        ),
        loader: fetchGames,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
