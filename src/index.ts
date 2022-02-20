import './styles/styles.sass';
import Game from './scripts/Game';

let container = document.querySelector('#board-canvas') as HTMLElement;
new Game(container);
