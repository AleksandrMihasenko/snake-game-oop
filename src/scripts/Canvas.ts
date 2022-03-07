export default class Canvas {
    public container;
    public canvas: HTMLCanvasElement;
    public context: CanvasRenderingContext2D;

    constructor(container: HTMLElement) {

        this.canvas = document.createElement('canvas') as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d')!;
        this.container = container;

        this.canvas.width = 320;
        this.canvas.height = 400;

        container?.appendChild(this.canvas);
    }
}
