import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage /> ,
  },
]);

function App() {
  const [appState , setAppState] = useState();

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
