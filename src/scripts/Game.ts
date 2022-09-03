import Canvas from './Canvas';
import Config from './Config';
import GameControls from './GameControls';
import Snake from './Snake';
import Score from './Score';
import Fruit from './Fruit';

export default class Game {
    public canvas;
    public snake;
    public score;
    public fruit;

    constructor(container: HTMLElement) {
        this.canvas = new Canvas(container);
        this.snake = new Snake();
        this.fruit = new Fruit(this.canvas);
        this.score = new Score('.board_header_score_count', 0);

        new GameControls(this.update.bind(this), this.draw.bind(this));
    }

    update() {
        this.snake.update(this.fruit, this.score, this.canvas);
    }

    draw() {
        this.canvas.context.clearRect(0, 0, this.canvas.canvas.width, this.canvas.canvas.height);
        this.snake.draw(this.canvas.context);
        this.fruit.draw(this.canvas.context);
    }
}
