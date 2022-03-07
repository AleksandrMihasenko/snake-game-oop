export default class Score {
    public scoreBlock: any;
    public score: number = 0;

    constructor(scoreBlock: any, score: number) {
        this.scoreBlock = document.querySelector(scoreBlock);
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
        this.scoreBlock.innerHTML = this.score;
    }
}
