import  './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
import './src/styles/generic/reset.css';

import CardGame from './src/components/CardGame';
import PlayerScore from './src/components/PlayerScore';

const $root = document.querySelector("#root");

const $htmlCardGame = CardGame()
const $htmlPlayerScore = PlayerScore()



$root.insertAdjacentHTML('beforeend', $htmlCardGame);
$root.insertAdjacentHTML('beforeend', $htmlPlayerScore);

