import './styles/styles.sass';
import Game from './scripts/Game';

const container = document.querySelector('#board-canvas');

new Game(container);
