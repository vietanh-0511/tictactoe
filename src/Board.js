import { useState } from "react";
import Square from "./Square";

function Board() {
  const [status, setStatus] = useState("X");
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState("");

  const checkWinner = (squares) => {
    // const lines = [
    //   [0, 1, 2],
    //   [3, 4, 5],
    //   [6, 7, 8],
    //   [0, 3, 6],
    //   [1, 4, 7],
    //   [2, 5, 8],
    //   [0, 4, 8],
    //   [2, 4, 6],
    // ];
    
    // for (const line of lines) {
    //   const [a, b, c] = line;
    //   if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
    //     return status;
    //   }
    // }
    // return null;

    // /*
    for (let i = 0; i <= 2; i++) {
      // check hang ngang
      if (
        squares[i * 3] &&
        squares[i * 3] == squares[i * 3 + 1] &&
        squares[i * 3] == squares[i * 3 + 2]
      ) {
        return status;
      }
      // check hang doc
      if (
        squares[i] &&
        squares[i] == squares[i + 3] &&
        squares[i] == squares[i + 6]
      ) {
        return status;
      }

      // check cheo
      for (let j = 3; j <= 5; j++) {
        for (let k = 6; k <= 8; k++) {
          if (
            squares[i] &&
            squares[i] == squares[j] &&
            squares[i] == squares[k] &&
            i + j + k == 12
          ) {
            return status;
          }
        }
      }
    }

    // */
  };

  const handleClick = (i) => {
    if (squares[i]) {
      return;
    }

    //dat lai gia tri cua square = X hoac O
    let s = squares[i];
    s = status === "X" ? "X" : "O";
    let copy = [...squares]; //copy ra 1 mang khac
    copy[i] = s; //thay doi gia tri ptu i trong mang
    setSquares(copy); //set squares = mang moi
    // setSquares(squares.splice(1, i, s));

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
