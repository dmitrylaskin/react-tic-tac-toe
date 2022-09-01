import React from 'react';
import styles from './styles.module.css'

const TableCell = ({idx, onSetTurn, turn, cells, onSetCells, onCheckWinner}) => {
    const handleCellClick = (idx) => {
        if (cells[idx] !== null) {
            return;
        }
        console.log('idx: ', idx)
        const squares = [...cells]

        if (turn === 'x') {
            squares[idx] = 'x'
            onSetTurn('o')
        } else {
            squares[idx] = 'o'
            onSetTurn('x')
        }
        onSetCells(squares)
        onCheckWinner(squares)
    }

    return (
        <td className={styles} onClick={() => handleCellClick(idx)}>
            {cells[idx]}
        </td>
    );
};

export {TableCell};