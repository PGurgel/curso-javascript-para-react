import  './src/styles/settings/colors.css';
import './src/styles/elements/base.css';
import './src/styles/generic/reset.css';

import PlayerScore from './src/components/PlayerScore';
import BoardGame from './src/objects/BoardGame';

const $root = document.querySelector("#root");
const $htmlPlayerScore = PlayerScore();
const $BoardGame = BoardGame(2);

$root.insertAdjacentHTML('beforeend', $htmlPlayerScore);
$root.insertAdjacentHTML('beforeend', $BoardGame);

