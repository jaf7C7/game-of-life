import { test, expect } from '@jest/globals';
import { createGrid } from '../ui.js';

test('should create a grid of cells', () => {
    const grid = createGrid();

    expect(grid.cells).toEqual([]);
});
