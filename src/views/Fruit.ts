import Config from '../config/Config';
import Canvas from './Canvas';
import { calcRandomNumber } from '../helpers/calcRandomNumber';

export default class Fruit {
  public x: number = 0;
  public y: number = 0;
  public config;
  public canvas;
  
  constructor(canvas: Canvas) {
    this.canvas = canvas;
    this.config = new Config();
    this.randomPosition();
  }
  
  draw(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.fillStyle = '#a00034';
    context.arc(this.x + (this.config.sizeCell / 2), this.y + (this.config.sizeCell / 2), this.config.sizeFruit, 0, 2 * Math.PI);
    context.fill();
  }
  
  randomPosition() {
    this.x = calcRandomNumber(0, this.canvas.width / this.config.sizeCell) * this.config.sizeCell;
    this.y = calcRandomNumber(0, this.canvas.height / this.config.sizeCell) * this.config.sizeCell;
  }
}
