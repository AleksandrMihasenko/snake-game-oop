import Config from './Config';

export default class GameControl {
    public update: Function;
    public draw: Function;
    public config: any;

    constructor(update: Function, draw: Function) {
        this.update = update;
        this.draw = draw;
        this.config = new Config();

        this.animate = this.animate.bind(this);
        this.animate();
    }

    animate():void {
        requestAnimationFrame(() => this.animate() );

        if (++this.config.step < this.config.maxStep) {
            return;
        }
        this.config.step = 0;

        this.update();
        this.draw();
    }
}
