export default class Score {
  public scoreBlock: HTMLElement | null;
  
  constructor(public scoreWrapper: string, public score: number = 0) {
    this.scoreBlock = document.querySelector(scoreWrapper);
    this.score = score;
    
    this.draw();
  }
  
  incScore(): void {
    this.score++;
    this.draw();
  }
  
  setToZero(): void {
    this.score = 0;
    this.draw();
  }
  
  draw(): void {
    if (this.scoreBlock) {
      this.scoreBlock.innerHTML = String(this.score);
    }
  }
}
