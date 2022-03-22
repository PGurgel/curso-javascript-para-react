import CardGame from '../../components/CardGame';
export default function BoardGame(amountCards) {

    const $CardGame = CardGame()
    const $htmlBoardGame = $CardGame.repeat(amountCards)

    return $htmlBoardGame; 

}