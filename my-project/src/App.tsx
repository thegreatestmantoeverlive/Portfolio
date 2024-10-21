import React, { createContext, useContext } from "react";
import { useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { AppState } from "./utils/types";

const appContext = createContext<AppState | undefined>(undefined);

function App() {
  const appState = useContext(appContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage
          type="default"
          shouldRefresh={appState?.shouldRefresh || false}
        />
      ),
    },
    {
      path: "/settings",
      element: <p> sdf</p>,
    },
  ]);

  return (
    <RouterProvider router={router}>
      <div className="h-screen w-screen">
        <Header />
      </div>
    </RouterProvider>
  );
}

export default App;
