import './styles/styles.sass';
import Canvas from './scripts/Canvas';

let container = document.querySelector('#board-canvas') as HTMLElement;
let canvas = new Canvas(container);
