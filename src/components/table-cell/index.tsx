import React from 'react';
import styles from './styles.module.css'

interface TableCellProps {
    idx:number
    onSetTurn: (turn:string) => void
    turn:string
    cells: Array<string>
    onSetCells: (squares:Array<string>) => void
    onCheckWinner: (squares: Array<string>) => void
    disabled: boolean
}

const TableCell: React.FC<TableCellProps> = ({idx, onSetTurn, turn, cells, onSetCells, onCheckWinner, disabled}) => {
    const handleCellClick: (idx:number) => void = (idx) => {
        if (cells[idx] !== null || disabled) {
            return;
        }
        const squares:Array<string> = [...cells]

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

export {TableCell};