import { cellsAreEqual } from './life.js';

export function createGrid() {
    return {
        cells: [],
        toggleCell(x, y) {
            const targetCell = [x, y];
            const cellIndex = this.cells.findIndex((cell) =>
                cellsAreEqual(cell, targetCell),
            );

            if (cellIndex === -1) {
                this.cells.push([x, y]);
            } else {
                this.cells.splice(cellIndex, 1);
            }
        },
    };
}

export function createGame() {
    return {
        isPlaying() {
            return false;
        },
    };
}
