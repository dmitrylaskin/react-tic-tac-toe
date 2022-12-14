import {IWinningCombinations} from "./types/types";

export const winningCombinations: IWinningCombinations = {
    down: [
        [0,3,6],
        [1,4,7],
        [2,5,8],
    ],
    across: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
    ],
    diagonal: [
        [0,4,8],
        [2,4,6]
    ]
}

export const emptyCells: Array<null> = Array(9).fill(null)