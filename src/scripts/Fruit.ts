import Config from './Config';
import {calcRandomNumber} from './helpers';

export default class Fruit {
    public x;
    public y;
    public config;
    private canvas: any;

    constructor(canvas: any) {
        this.x = 0;
        this.y = 0

        this.config = new Config();
        this.randomPosition();
    }

    draw(context: any) {
        context.beginPath();
        context.fillStyle = '#a00034';
        context.arc(this.x + (this.config.sizeCell / 2), this.y + (this.config.sizeCell / 2), this.config.sizeFruit, 0, 2 * Math.PI);
        context.fill();
    }

    randomPosition() {
        this.x = calcRandomNumber(0, this.canvas.element.width / this.config.sizeCell) * this.config.sizeCell;
        this.y = calcRandomNumber(0, this.canvas.element.height / this.config.sizeCell) * this.config.sizeCell;
    }
}
