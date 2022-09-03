import Canvas from './Canvas';
import Config from './Config';
import Fruit from './Fruit';
import Score from './Score';

export default class Snake {
    private config: Config;
    private x: number;
    private y: number;
    private dx: number;
    private dy: number;
    private tails: any[];
    private maxTails: number;

    constructor() {
        this.config = new Config()
        this.x = 160;
        this.y = 160;
        this.dx = this.config.sizeCell;
        this.dy = 0;
        this.tails = [];
        this.maxTails = 3;

        this.control();
    }

    update(fruit: any, score: any, canvas: any) {
        this.x += this.dx;
        this.y += this.dy;
        
        if (this.x < 0) {
            this.x = canvas.clientWidth - this.config.sizeCell;
        } else if (this.x >= canvas.clientWidth) {
            this.x = 0;
        }

        if (this.y < 0) {
            this.y = canvas.clientHeight - this.config.sizeCell;
        } else if (this.y >= canvas.clientHeight) {
            this.y = 0;
        }

        this.tails.unshift({ x: this.x, y: this.y });

        if (this.tails.length > this.maxTails) {
            this.tails.pop();
        }

        this.tails.forEach((elem, index) => {
            if (elem.x === fruit.x && elem.y === fruit.y) {
                this.maxTails++;
                score.incScore();
                fruit.randomPosition();
            }

            for (let i = index + 1; i < this.tails.length; i++) {
                if (elem.x === this.tails[i].x && elem.y === this.tails[i].y) {
                    this.death();
                    score.setToZero();
                    fruit.randomPosition();
                }
            }
        })
    }

    draw(context: any) {
        this.tails.forEach((elem, index) => {
            if (index === 0) {
                context.fillStyle = '#fa0556';
            } else {
                context.fillStyle = '#a00034';
            }
            context.fillRect(elem.x, elem.y, this.config.sizeCell, this.config.sizeCell);
        })
    }

    death() {
        this.x = 160;
        this.y = 160;
        this.dx = this.config.sizeCell;
        this.dy = 0;
        this.tails = [];
        this.maxTails = 3;
    }

    control() {
        document.addEventListener('keydown', (event) => {
            if (event.code === 'KeyW') {
                this.dy = -this.config.sizeCell;
                this.dx = 0;
            } else if (event.code === 'KeyA') {
                this.dy = -this.config.sizeCell;
                this.dx = 0;
            } else if (event.code === 'KeyS') {
                this.dy = -this.config.sizeCell;
                this.dx = 0;
            } else if (event.code === 'KeyS') {
                this.dy = -this.config.sizeCell;
                this.dx = 0;
            }
        })
    }
}
