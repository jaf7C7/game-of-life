function cellsAreEqual(cellA, cellB) {
    return cellA[0] === cellB[0] && cellA[1] === cellB[1];
}

function cellIsAlive(targetCell, cells) {
    return cells.find((cell) => cellsAreEqual(targetCell, cell)) !== undefined;
}

function getNeighbours(targetCell) {
    const [x, y] = targetCell;
    const neighbours = [
        [x + 1, y],
        [x + 1, y + 1],
        [x, y + 1],
        [x - 1, y + 1],
        [x - 1, y],
        [x - 1, y - 1],
        [x, y - 1],
        [x + 1, y - 1],
    ];

    return neighbours;
}

export function next(cells) {
    const potentialNeighbours = getNeighbours([0, 0]);
    const liveNeighbours = potentialNeighbours.filter((potentialNeighbour) =>
        cellIsAlive(potentialNeighbour, cells),
    );

    return liveNeighbours.length == 2 ? cells : [];
}
