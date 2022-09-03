import React, { useState } from "react";
import { TableCell } from "../table-cell";
import { emptyCells, winningCombinations } from "../../constants";
import { PlayerName } from "../player-name";
import styles from "./styles.module.css";

const Table = () => {
  const [turn, setTurn] = useState("x");
  const [cells, setCells] = useState(emptyCells);
  const [winner, setWinner] = useState(null);
  const [playersName, setPlayersName] = useState({
    playerOne: "Player#1",
    playerTwo: "Player#2",
  });

  const checkWinner = (squares) => {
    for (let direction in winningCombinations) {
      for (let item in winningCombinations[direction]) {
        if (
          squares[winningCombinations[direction][item][0]] === null ||
          squares[winningCombinations[direction][item][1]] === null ||
          squares[winningCombinations[direction][item][2]] === null
        ) {
        } else if (
          squares[winningCombinations[direction][item][0]] ===
            squares[winningCombinations[direction][item][1]] &&
          squares[winningCombinations[direction][item][1]] ===
            squares[winningCombinations[direction][item][2]]
        ) {
          setWinner(squares[winningCombinations[direction][item][0]]);
        }
      }
    }
  };

  const handleRestart = () => {
    setWinner(null);
    setCells(emptyCells);
    setTurn("x");
  };

  const handleSetPlayersNames = (value, id) => {
    if (id === "pl_1") {
      setPlayersName({ playerOne: value, playerTwo: playersName.playerTwo });
    } else {
      setPlayersName({ playerOne: playersName.playerOne, playerTwo: value });
    }
  };

  return (
    <div className={styles.content}>
      <div className={styles.players}>
        <PlayerName
          id={"pl_1"}
          playersName={playersName}
          onSetPlayersName={handleSetPlayersNames}
        />
        <PlayerName
          id={"pl_2"}
          playersName={playersName}
          onSetPlayersName={handleSetPlayersNames}
        />
      </div>
      <span className={styles.turn}>
        Turn: {turn === "x" ? playersName.playerOne : playersName.playerTwo}
      </span>
      <table className={styles.table}>
        <tbody>
          <tr>
            <TableCell
              idx={0}
              onSetTurn={setTurn}
              turn={turn}
              cells={cells}
              onSetCells={setCells}
              onCheckWinner={checkWinner}
              disabled={Boolean(winner)}
            />
            <TableCell
              idx={1}
              onSetTurn={setTurn}
              turn={turn}
              cells={cells}
              onSetCells={setCells}
              onCheckWinner={checkWinner}
              disabled={Boolean(winner)}
            />
            <TableCell
              idx={2}
              onSetTurn={setTurn}
              turn={turn}
              cells={cells}
              onSetCells={setCells}
              onCheckWinner={checkWinner}
              disabled={Boolean(winner)}
            />
          </tr>
          <tr>
            <TableCell
              idx={3}
              onSetTurn={setTurn}
              turn={turn}
              cells={cells}
              onSetCells={setCells}
              onCheckWinner={checkWinner}
              disabled={Boolean(winner)}
            />
            <TableCell
              idx={4}
              onSetTurn={setTurn}
              turn={turn}
              cells={cells}
              onSetCells={setCells}
              onCheckWinner={checkWinner}
              disabled={Boolean(winner)}
            />
            <TableCell
              idx={5}
              onSetTurn={setTurn}
              turn={turn}
              cells={cells}
              onSetCells={setCells}
              onCheckWinner={checkWinner}
              disabled={Boolean(winner)}
            />
          </tr>
          <tr>
            <TableCell
              idx={6}
              onSetTurn={setTurn}
              turn={turn}
              cells={cells}
              onSetCells={setCells}
              onCheckWinner={checkWinner}
              disabled={Boolean(winner)}
            />
            <TableCell
              idx={7}
              onSetTurn={setTurn}
              turn={turn}
              cells={cells}
              onSetCells={setCells}
              onCheckWinner={checkWinner}
              disabled={Boolean(winner)}
            />
            <TableCell
              idx={8}
              onSetTurn={setTurn}
              turn={turn}
              cells={cells}
              onSetCells={setCells}
              onCheckWinner={checkWinner}
              disabled={Boolean(winner)}
            />
          </tr>
        </tbody>
      </table>

      {!cells.includes(null) && !winner && (
        <div className={styles.draw}>
          <span className={styles.title}>Draw (• ◡•)| (❍ᴥ❍ʋ)</span>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}

      {winner && (
        <div>
          <div className={styles.winner}>
            Winner:{" "}
            <span className={styles.name}>
              {winner === "x" ? playersName.playerOne : playersName.playerTwo}
            </span>{" "}
            ヾ(⌐■_■)ノ♪
          </div>
          <button onClick={handleRestart}>Restart</button>
        </div>
      )}
    </div>
  );
};

export { Table };
