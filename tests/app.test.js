import { test, expect } from '@jest/globals';
import { Life } from '../life/life.js';
import createApp from '../life/app.js';

class MockUI {
    constructor(game) {
        this._game = game;
        this._elements = [];
    }

    createElement(element) {
        this._elements.push(element);
    }

    createGrid(cellSize) {
        this.createElement({
            id: 'grid',
            cellSize: cellSize,
            click: (x, y) => {
                this._game.toggleCell(x / cellSize, y / cellSize);
            },
        });
    }

    findElement(id) {
        return this._elements.find((e) => e.id === id);
    }
}

test('Renders a grid of cells', () => {
    const ui = new MockUI();

    createApp(ui);

    expect(ui.findElement('grid')).not.toBe(undefined);
});

test('Clicking on the grid toggles the corresponding cells', () => {
    const life = new Life();
    const ui = new MockUI(life);
    const cellSize = 25; // size in pixels.

    createApp(ui, cellSize);
    const grid = ui.findElement('grid');
    grid.click(50, 50); // pixel co-ords, should toggle cell [2, 2].

    expect(life.cells).toEqual([[2, 2]]);
});
