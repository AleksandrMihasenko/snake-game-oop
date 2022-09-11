export default class Canvas {
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  public width: number = 0;
  public height: number = 0;
  
  constructor(container: Element | null, width: number, height: number) {
    
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d')!;
  
    this.canvas.width = 320;
    this.canvas.height = 400;
    this.width = width;
    this.height = height;
    
    container?.appendChild(this.canvas);
  }
}
