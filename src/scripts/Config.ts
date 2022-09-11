export default class Config {
  
  constructor(
    public step: number = 0,
    public maxStep: number = 6,
    public sizeCell: number = 16,
    public sizeFruit: number = sizeCell / 4,
  ) {}
}
