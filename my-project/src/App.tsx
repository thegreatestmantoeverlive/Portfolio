import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import { AppState } from "./utils/types";

function App() {
  const [appState, setAppState] = useState<AppState>(undefined);

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
    // {
    //   path : "/settings",
    //   element : <Settings />
    // },
  ]);

  return (
    <>
      <Header />
      <div className="h-screen w-screen">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
