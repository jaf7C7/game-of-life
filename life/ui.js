export default function render() {
    const grid = document.querySelector('#grid');
    const ctx = grid.getContext('2d');

    const gridSize = 10;
    const cellSize = 25;

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 0.5;

    for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();

        ctx.moveTo(i * cellSize, 0);
        ctx.lineTo(i * cellSize, gridSize * cellSize);

        ctx.moveTo(0, i * cellSize);
        ctx.lineTo(gridSize * cellSize, i * cellSize);

        ctx.stroke();
    }
}
