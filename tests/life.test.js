import { test, expect } from '@jest/globals';
import { Life } from '../life.js';

test('should create a grid of cells', () => {
    const life = new Life();

    expect(life.cells).toEqual([]);
});

test('can toggle a dead cell to alive', () => {
    const life = new Life();

    life.toggleCell(5, 5);

    expect(life.cells).toContainEqual([5, 5]);
});

test('can toggle an alive cell to dead', () => {
    const life = new Life();

    life.toggleCell(5, 5);
    life.toggleCell(5, 5);

    expect(life.cells).not.toContainEqual([5, 5]);
});

test('calculates new state of the grid with each tick', () => {
    const life = new Life();
    // A lone cell without neighbours will die after 1 generation.
    life.toggleCell(5, 5);

    life.tick();

    expect(life.cells).toEqual([]);
});

test('starts in a stopped state', () => {
    const life = new Life();

    expect(life.isPlaying()).toBe(false);
});

test('schedules game ticks while playing', () => {
    const life = new Life();
    let tickCallback = null;

    const mockScheduler = (callback) => {
        tickCallback = callback;
    };

    life.toggleCell(0, 0); // Lone cell will die.
    life.play(mockScheduler);
    tickCallback(); // Manually execute a scheduled tick.

    expect(life.cells).toEqual([]); // Cell has died.
});

test('cancels scheduled ticks when stopped', () => {
    const life = new Life();
    let tickCallback = null;

    const mockScheduler = () => {
        return {
            cancel: () => {
                tickCallback = null;
            },
        };
    };

    life.play(mockScheduler);
    life.stop();

    expect(tickCallback).toBe(null);
});

// This guards against stray ticks which might get executed after the game has
// been stopped, due to async timing effects.
test('ticks executed when stopped have no effect', () => {
    const life = new Life();
    let tickCallback = null;

    const mockScheduler = (callback) => {
        tickCallback = callback;
        return {
            cancel: () => {},
        };
    };

    life.toggleCell(0, 0); // Lone cell will die.
    life.play(mockScheduler);
    life.stop();
    tickCallback(); // Tick should have no effect on stopped game.

    expect(life.cells).toEqual([[0, 0]]);
});

test('stops playing automatically when all cells are dead', () => {
    const life = new Life();
    let tickCallback = null;

    const mockScheduler = (callback) => {
        tickCallback = callback;
        return {
            cancel: () => {
                tickCallback = null;
            },
        };
    };

    life.toggleCell(5, 5); // Lone cell will die
    life.play(mockScheduler);
    tickCallback(); // Manually execute a scheduled tick => lone cell dies.

    expect(life.isPlaying()).toBe(false);
});
