import React, { useState } from "react";
// import dice_1 from "../assets/Images/dice_1.png";
// import dice_2 from "../assets/Images/dice_2.png";
// import dice_3 from "../assets/Images/dice_3.png";
// import dice_4 from "../assets/Images/dice_4.png";
// import dice_5 from "../assets/Images/dice_5.png";
// import dice_6 from "../assets/Images/dice_6.png";

const PlayGame = () => {
  const dice = [1, 2, 3, 4, 5, 6];
  const [selectedValue, setSelectedValue] = useState(null);
  const [currentImg,setCurrentImg] = useState(1)
  const [rolling, setRolling] = useState(false);
  const [error, setError] = useState('');
  const [score,setScore] = useState(0)
  const [showRlues , setShowRules] = useState(false)


  const handleBoxClick = (value) => {
    console.log(value);
    console.log(selectedValue);
    setSelectedValue(value === selectedValue ? null : value);
    setError()

  };


  const handleDiceClick = () => {

    if(!selectedValue) {
        setError('Please Slecect Number')

        return
    }
    else {
        setError()
    }

    if (rolling) return; // Prevent multiple rolls
    setRolling(true);

    // Change dice image every second for 3 seconds (total 3 changes)
    const changeInterval = setInterval(() => {
      setCurrentImg((prevImg) => (prevImg % 6) + 1);
    }, 200);

    // After 1.5 seconds, generate a random number
    setTimeout(() => {
      clearInterval(changeInterval); // Stop the changing animation
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setCurrentImg(randomNumber);
      setRolling(false); // Reset rolling state

    if(selectedValue === randomNumber){
        setScore((prev) => prev+randomNumber)
    }
    else{
        setScore((prev) => prev-2)
    }
    setSelectedValue(null); 

    }, 1500);


  };

  const resetScore = () => {
    setScore(0)
  }


  return (
    <>
      <section className="flex w-11/12 justify-between m-auto p-8 ">
        <div className="flex flex-col items-center justify-center">
          <p className="text-8xl font-bold ">{score}</p>
          Total Score
        </div>
        <div className="flex flex-col items-end gap-3">
        {error && <p className="text-red-600 text-lg">{error}</p>}
          <div className="flex gap-3">
            {dice.map((value, i) => (
              <Box
                key={i}
                value={value}
                isSelected={value === selectedValue}
                handleClick={() => handleBoxClick(value)}
              />
            ))}
          </div>
          <h3 className="text-2xl font-bold">Select Number</h3>
        </div>
      </section>
      <section className="flex flex-col w-[250px] m-auto items-center gap-6 cursor-pointer">
        <div>
          <img src={`/dice_${currentImg}.png`} alt="" onClick={()=> handleDiceClick()} />
        </div>
        <h1 className="text-2xl font-medium">Click on Dice to Roll</h1>
        <div className="flex flex-col gap-6">
          <button className="w-[220px] bg-white text-black py-[10px] px-[18px] border border-1 border-black ease-in duration-100 rounded-md hover:bg-black hover:border-white hover:text-white"
          onClick={resetScore}>
            Reset Score
          </button>
          <button className="w-[220px] bg-black text-white py-[10px] px-[18px] border border-1 border-transparent ease-in duration-100 rounded-md hover:bg-white hover:border-black hover:text-black"
          onClick={() => {
            setShowRules((prev) => !prev)
          }}>
            Show Rules
          </button>
        </div>
        {showRlues && <div className="whitespace-nowrap w-max bg-[#FBF1F1] p-5 text-md flex flex-col gap-4 mb-4">
            <h1 className="font-bold text-3xl">How to play Dice Game</h1>
            <div className="flex flex-col gap-1">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>If you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </div>}
        
      </section>
    </>
  );
};

export default PlayGame;

const Box = ({ value, isSelected, handleClick }) => {
  return (
    <div
      className={`w-[72px] h-[72px] flex items-center justify-center  border border-1 border-black text-2xl font-bold cursor-pointer ${
        isSelected ? "bg-black text-white" : "bg-white text-black"
      }`}
      onClick={handleClick}
    >
      {value}
    </div>
  );
};
