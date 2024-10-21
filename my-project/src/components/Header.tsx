import { Button, IconButton } from "@mui/material";
import React from "react";
import { IoSparkles } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  // const navigate = useNavigate();

  return (
    <header className="w-full p-2 bg-base flex flex-row items-center justify-start">
      <div className="flex flex-row items-center space-x-5" onClick={() => {}}>
        <IoSparkles
          onClick={() => {}}
          className=" transform transition-transform duration-300 ease-in-out hover:scale-125"
        />

        <p className="font-title text-none select-none">Nyaaa-tube</p>
        <IconButton name="settings" onClick={() => navigate("/settings")} />
      </div>
    </header>
  );
};

export default Header;
