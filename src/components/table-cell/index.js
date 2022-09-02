import React from 'react';
import styles from './styles.module.css'
import PropTypes from "prop-types";

const TableCell = ({idx, onSetTurn, turn, cells, onSetCells, onCheckWinner, disabled}) => {
    const handleCellClick = (idx) => {
        if (cells[idx] !== null || disabled) {
            return;
        }
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
        <td className={styles.cell} onClick={() => handleCellClick(idx)}>
            {cells[idx]}
        </td>
    );
};

TableCell.propTypes = {
    idx: PropTypes.number.isRequired,
    onSetTurn: PropTypes.func.isRequired,
    turn: PropTypes.string.isRequired,
    cells: PropTypes.arrayOf(PropTypes.string),
    onSetCells: PropTypes.func.isRequired,
    onCheckWinner: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}

export {TableCell};