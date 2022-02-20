import Config from './Config';

export default class GameControl {
    public update: any;
    public draw: any;
    public config: any;

    constructor(update: any, draw: any, config: object) {
        this.update = update;
        this.draw = draw;
        this.config = new Config();

        this.animate = this.animate.bind(this);
        this.animate();
    }

    animate():void {
        if (this.config.step < this.config.maxStep) {
            return;
        }
        this.config.step = 0;

        this.update();
        this.draw();
    }
}
