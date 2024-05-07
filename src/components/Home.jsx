import React from "react";
import dices from "../assets/Images/dices.png";

const Home = ({ setIsGameStarted }) => {
  const handleClick = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-screen min-h-screen p-8">
      <div>
        <img src={dices} alt="" srcset="" />
      </div>
      <div className="flex flex-col  items-center lg:items-end gap-4">
        <h1 className="text-7xl lg:text-8xl text-center font-bold lg:whitespace-nowrap">DICE GAME</h1>
        <button className="w-[220px] bg-black text-white py-[10px] px-[18px] border border-1 border-transparent ease-in duration-100 rounded-md hover:bg-white hover:border-black hover:text-black"
        onClick={handleClick}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default Home;
