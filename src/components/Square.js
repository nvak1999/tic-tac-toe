import React from "react";

function Square({ squares, handleClick }) {
  return (
    <div className="square_btn">
      <button key={`square0`} id={"btnXO"} onClick={(e) => handleClick(0)}>
        {squares[0] ? squares[0] : "­"}
      </button>
      <button key={`square1`} id={"btnXO"} onClick={(e) => handleClick(1)}>
        {squares[1] ? squares[1] : "­"}
      </button>
      <button key={`square2`} id={"btnXO"} onClick={(e) => handleClick(2)}>
        {squares[2] ? squares[2] : "­"}
      </button>

      <button key={`square3`} id={"btnXO"} onClick={(e) => handleClick(3)}>
        {squares[3] ? squares[3] : "­"}
      </button>
      <button key={`square4`} id={"btnXO"} onClick={(e) => handleClick(4)}>
        {squares[4] ? squares[4] : "­"}
      </button>
      <button key={`square5`} id={"btnXO"} onClick={(e) => handleClick(5)}>
        {squares[5] ? squares[5] : "­"}
      </button>

      <button key={`square6`} id={"btnXO"} onClick={(e) => handleClick(6)}>
        {squares[6] ? squares[6] : "­"}
      </button>
      <button key={`square7`} id={"btnXO"} onClick={(e) => handleClick(7)}>
        {squares[7] ? squares[7] : "­"}
      </button>
      <button key={`square8`} id={"btnXO"} onClick={(e) => handleClick(8)}>
        {squares[8] ? squares[8] : "­"}
      </button>
    </div>
  );
}

export default Square;
