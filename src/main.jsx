import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import "./index.css";
import AuthContextProvider from "./contexts/AuthContext";
import GameLibraryProvider from "./contexts/GameLibraryContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <GameLibraryProvider>
        <RouterProvider router={router} />
        <Toaster position="top-center" reverseOrder={false} />
      </GameLibraryProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
