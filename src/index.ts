import './styles/styles.sass';
import Game from './views/Game';

const container = document.querySelector('#board-canvas');

new Game(container);
