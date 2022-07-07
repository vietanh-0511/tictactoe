import { useState } from "react";
import Square from "./Square";

function Board() {
  const [status, setStatus] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState("");

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (squares) => {
    // for (const line of lines) {
    //   const [a, b, c] = line;
    //   if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
    //     return status;
    //   }
    // }

    for (let i = 0; i <= 2; i++) {
      if (
        squares[i * 3] &&
        squares[i * 3] == squares[i * 3 + 1] &&
        squares[i * 3] == squares[i * 3 + 2]
      ) {
        return status;
      }
      if (
        squares[i + 3] &&
        squares[i + 3] == squares[i + 6] &&
        squares[i + 3] == squares[i + 6]
      ) {
        return status;
      }
    }

    // for (let i = 0; i <= 8; i++) {
    //   for (let j = 0; j <= i; j++) {
    //     for (let k = 0; k <= j; k++) {
    //       if () {
    //         return status;
    //       }
    //     }
    //   }
    // }
  };

  const handleClick = (i) => {
    //dat lai gia tri cua square = X hoac O
    let s = squares[i];
    s = status === "X" ? "X" : "O";
    let copy = [...squares]; //copy ra 1 mang khac
    copy[i] = s; //thay doi gia tri cua 1 ptu trong mang
    setSquares(copy); //set squares = mang moi
    setStatus(status === "X" ? "O" : "X");

    // setSquares(squares.splice(i, i, s));
    //check winner
    const win = checkWinner(copy);
    if (win) {
      setWinner(win);
    } else {
      setStatus(status === "X" ? "O" : "X");
    }
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={(e) => handleClick(i)} />;
  };

  return (
    <div>
      <div className="status">
        {winner ? "Winner: " + winner : "Turn: " + status}
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
