import React from "react";
import { IoSparkles } from "react-icons/io5";

const Header: React.FC = () => {
  return (
    <header className="w-full p-2 bg-base flex flex-row items-center justify-start">
      <div className="flex flex-row items-center space-x-5" onClick={() => {
        
      }}>
        <IoSparkles
          onClick={() => {}}
          className=" transform transition-transform duration-300 ease-in-out hover:scale-125"
        />

        <p className="font-title text-none select-none">Nyaaa-tube</p>
      </div>
    </header>
  );
};

export default Header;
