export default function render() {
    const grid = document.querySelector('#grid');
    const ctx = grid.getContext('2d');

    const gridHeight = 1000;
    const gridWidth = 500;
    const cellSize = 25;

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 0.5;

    for (let y = 0; y <= gridHeight; y += cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(gridWidth, y);
        ctx.stroke();
    }

    for (let x = 0; x <= gridWidth; x += cellSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, gridHeight);
        ctx.stroke();
    }
}
