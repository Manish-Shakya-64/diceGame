import React from "react";
import dices from "../assets/Images/dices.png";

const Home = ({ setIsGameStarted }) => {
  const handleClick = () => {
    setIsGameStarted((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center w-screen min-h-screen">
      <div>
        <img src={dices} alt="" srcset="" />
      </div>
      <div className="flex flex-col  items-end ">
        <h1 className="text-[96px] font-bold whitespace-nowrap">DICE GAME</h1>
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
