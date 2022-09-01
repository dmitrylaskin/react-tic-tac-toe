import React, {useState} from 'react';
import styles from './styles.module.css'
import {TableCell} from "../table-cell";
import {emptyCells, winningCombinations} from "../../constants";

const Table = () => {
    const [turn, setTurn] = useState('x')
    const [cells, setCells] = useState(emptyCells)
    const [winner, setWinner] = useState(null)

    const checkWinner = (squares) => {
        for (let direction in winningCombinations) {
            for (let item in winningCombinations[direction]) {
                if (squares[winningCombinations[direction][item][0]] === null
                    || squares[winningCombinations[direction][item][1]] === null
                    || squares[winningCombinations[direction][item][2]] === null) {
                } else if (squares[winningCombinations[direction][item][0]] === squares[winningCombinations[direction][item][1]]
                    && squares[winningCombinations[direction][item][1]] === squares[winningCombinations[direction][item][2]]) {
                    setWinner(squares[winningCombinations[direction][item][0]])
                }
            }
        }
    }

    const handleRestart = () => {
        setWinner(null)
        setCells(emptyCells)
    }

    return (
        <div className={styles}>
            <span>Turn: {turn}</span>
            <table>
                <tbody>
                <tr>
                    <TableCell idx={0}
                               onSetTurn={setTurn}
                               turn={turn} cells={cells}
                               onSetCells={setCells}
                               onCheckWinner={checkWinner}
                    />
                    <TableCell idx={1}
                               onSetTurn={setTurn}
                               turn={turn} cells={cells}
                               onSetCells={setCells}
                               onCheckWinner={checkWinner}
                    />
                    <TableCell idx={2}
                               onSetTurn={setTurn}
                               turn={turn} cells={cells}
                               onSetCells={setCells}
                               onCheckWinner={checkWinner}
                    />
                </tr>
                <tr>
                    <TableCell idx={3}
                               onSetTurn={setTurn}
                               turn={turn} cells={cells}
                               onSetCells={setCells}
                               onCheckWinner={checkWinner}
                    />
                    <TableCell idx={4}
                               onSetTurn={setTurn}
                               turn={turn} cells={cells}
                               onSetCells={setCells}
                               onCheckWinner={checkWinner}
                    />
                    <TableCell idx={5}
                               onSetTurn={setTurn}
                               turn={turn} cells={cells}
                               onSetCells={setCells}
                               onCheckWinner={checkWinner}
                    />
                </tr>
                <tr>
                    <TableCell idx={6}
                               onSetTurn={setTurn}
                               turn={turn} cells={cells}
                               onSetCells={setCells}
                               onCheckWinner={checkWinner}
                    />
                    <TableCell idx={7}
                               onSetTurn={setTurn}
                               turn={turn} cells={cells}
                               onSetCells={setCells}
                               onCheckWinner={checkWinner}
                    />
                    <TableCell idx={8}
                               onSetTurn={setTurn}
                               turn={turn} cells={cells}
                               onSetCells={setCells}
                               onCheckWinner={checkWinner}
                    />
                </tr>
                </tbody>
            </table>
            {winner && <div>
                <span>{winner}</span>
                <button onClick={handleRestart}>Restart</button>
            </div>}

        </div>
    );
};

export {Table};