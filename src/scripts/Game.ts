import Canvas from './Canvas';
import Config from './Config';
import GameControls from './GameControls';

export default class Game {
    public canvas;

    constructor(container: HTMLElement) {
        this.canvas = new Canvas(container);
        new GameControls(this.update.bind(this), this.draw.bind(this));
    }

    update() {
        console.log('load');
    }

    draw() {}
}
