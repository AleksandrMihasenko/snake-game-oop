export class Calculator {
    static version = '1';

    constructor() {}
    add(a: number, b: number):number {
        console.log(`version is ${Calculator.version}`);
        return a + b;
    }
}
