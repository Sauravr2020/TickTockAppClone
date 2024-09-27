import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#4A154A] to-[#6B5B9A] text-[#e7b1e7] shadow-lg p-8 rounded-b-2xl fixed w-full z-10 transition-shadow duration-500 ease-in-out transform hover:shadow-2xl hover:translate-y-[-2px] animate-fadeIn">
      <div className="flex items-center justify-center">
        <img
          src="/images/Date.png" 
          alt="TicTic Clone Logo"
          className="h-10 w-10 mr-2"
        />
        <h1 className="text-4xl font-bold">TickTick Clone</h1>
      </div>
    </nav>
  );
};

export default Navbar;
