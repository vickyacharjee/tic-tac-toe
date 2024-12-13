import React, { useState } from "react";

const MainContainer = () => {


  const [board, setBoard] = useState(Array(9).fill(null));
  
    const [isPlayerTurn,   setIsPlayerTurn] = useState(true);

  const handleBoxClick = (index) => {
     if (!isPlayerTurn || board[index] !== null) return;

        const newBoard = [...board];
         newBoard[index] = "X";
         setBoard(newBoard);

     setIsPlayerTurn(false);
    makeOpponentMove(newBoard);
  };

  const makeOpponentMove = (currentBoard) => {
    const emptyBoxes = currentBoard
      .map((value, index) => (value === null ? index : null))
      .filter((val) => val !== null);



    if (emptyBoxes.length > 0) {
      const randomIndex =
        emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)];

      currentBoard[randomIndex] = "O";
      setBoard(currentBoard);
      setIsPlayerTurn(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-teal-500">
      <h1 className="text-2xl font-bold text-white mb-6">Tic Tac Toe</h1>
        <div className="grid grid-cols-3 gap-0 w-48 h-48">
        {board.map((box, index) => (
          <div

                key={index}
                onClick={() => handleBoxClick(index)}
                  className="w-16 h-16 border-[2px] border-teal-400 flex items-center justify-center cursor-pointer text-3xl font-bold text-teal-800 bg-teal-500 hover:bg-teal-400 transition"
          >
            {box}
          </div>

    ))}
      </div>
    </div>
);
};

export default MainContainer;
