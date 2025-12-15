function createGrid(ui, game, cellSize) {
    ui.createElement({
        id: 'grid',
        cellSize: cellSize,
        click(x, y) {
            game.toggleCell(Math.floor(x / cellSize), Math.floor(y / cellSize));
        },
    });
}

export default function createApp(ui, game, cellSize) {
    createGrid(ui, game, cellSize);
}
