export function createGrid() {
    return {
        cells: [],
        toggleCell(x, y) {
            const cellIndex = this.cells.findIndex(
                (cell) => cell[0] === x && cell[1] === y,
            );

            if (cellIndex === -1) {
                this.cells.push([x, y]);
            } else {
                this.cells.splice(cellIndex, 1);
            }
        },
    };
}
