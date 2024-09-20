import { WINNER_COMBOS } from '../constants';

export const checkWinner=(boardToCheck,turn)=>{
    const winningCombo=WINNER_COMBOS.find(combo=>combo.every(index=>boardToCheck[index]===turn));
    if(winningCombo){
        return true;
    }
    return null;
}

export const getOpacityIndex=(movimientos)=>{
    return movimientos.length<6? null : movimientos[0];
}
