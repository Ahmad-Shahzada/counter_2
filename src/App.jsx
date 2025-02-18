import React from "react";
import { useRef } from "react";

const Parent = () => {
  const a = useRef(0);

  function counters() {
    a.current = a.current + 1
    console.log(`Button Clicked: ${a.current}`);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-300">
      <div className="relative h-[400px] w-[500px] bg-white/20 backdrop-blur-xl shadow-2xl rounded-2xl flex flex-col items-center justify-center p-8 border border-white/30">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-14">
          Counter
        </h1>
      
        <button
          onClick={counters}
          className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl active:scale-95 active:shadow-none"
        >
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Parent;
