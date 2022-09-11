export default class Canvas {
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  
  constructor(container: Element | null) {
    
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d')!;
    
    this.canvas.width = 320;
    this.canvas.height = 400;
    
    container?.appendChild(this.canvas);
  }
}
