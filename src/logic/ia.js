import { checkWinner } from "./board";
import { TURNS, WINNER_COMBOS } from "../constants";

export function getUtilidad(tablero,usuario,movimientos,lastTurn,depth){
    let valor=0;
    if(checkWinner(tablero,usuario)){
        return 1000-depth;
    }else if(checkWinner(tablero,usuario===TURNS.X?TURNS.O:TURNS.X)){
        return depth-1000;
    }else if(movimientos.length>4){
        WINNER_COMBOS.forEach(combo=>{
            let count=0;
            combo.forEach(index=>{
                if(lastTurn===usuario){
                    if(tablero[index]===usuario){
                        if(movimientos[5]!==index){
                            count++;
                        }
                    } else if(tablero[index]!==null){
                        if(movimientos[4]!==index){
                            count--;
                        }
                    }
                }else{
                    if(tablero[index]===usuario){
                        if(movimientos[4]!==index){
                            count++;
                        }
                    } else if(tablero[index]!==null){
                        if(movimientos[5]!==index){
                            count--;
                        }
                    }
                }
            });

            if(count>1){
                valor++;
            } else if(count<-1){
                valor--;
            }
        });
        return valor;
    }else{
        WINNER_COMBOS.forEach(combo=>{
            let count=0;
            combo.forEach(index=>{
                if(tablero[index]===usuario){
                    count++;
                }else if(tablero[index]!==null){
                    count--;
                }
            });

            if(count>1){
                valor++;
            }else if(count<-1){
                valor--;
            }
        });
        return valor;
    }
}

function getPosiblesMovimientos(tablero){
    const posibles=[];
    for(let i=0; i<9; i++){
        if(tablero[i]===null){
            posibles.push(i);
        }
    }
    return posibles;
}

function minimax(tablero, depth, maxDepth, alpha, beta, maximizingPlayer, iaPlayer, movimientos){
    const copiaTablero=tablero.slice();

    if(depth===maxDepth||checkWinner(copiaTablero,TURNS.X)||checkWinner(copiaTablero,TURNS.O)){
        const utilidad=getUtilidad(copiaTablero, iaPlayer, movimientos.slice(), maximizingPlayer===TURNS.X?TURNS.O:TURNS.X,depth);
        return { utilidad, posicion: null };
    }

    const posiblesMovimientos=getPosiblesMovimientos(copiaTablero);

    let posicion=null;
    let coste=null;
    if(maximizingPlayer===iaPlayer){
        for(let posMov of posiblesMovimientos){
            const { newTablero, newMovimientos }=simulateMove(copiaTablero, posMov, maximizingPlayer, movimientos);
            const { utilidad }=minimax(newTablero, depth+1, maxDepth, alpha, beta, maximizingPlayer===TURNS.X?TURNS.O:TURNS.X, iaPlayer, newMovimientos);
            if(utilidad>alpha){
                alpha=utilidad;
                posicion=posMov;
                if(beta<=alpha){
                    return { utilidad: alpha, posicion }
                }
            }
        }
        coste=alpha;
    }else{
        for(let posMov of posiblesMovimientos){
            const { newTablero, newMovimientos }=simulateMove(copiaTablero, posMov, maximizingPlayer, movimientos);
            const { utilidad }=minimax(newTablero, depth+1, maxDepth, alpha, beta, maximizingPlayer===TURNS.X?TURNS.O:TURNS.X, iaPlayer, newMovimientos);
            if(utilidad<beta){
                beta=utilidad;
                posicion=posMov;
                if(beta<=alpha){
                    return { utilidad: beta, posicion }
                }
            }
        }
        coste=beta;
    }

    return { utilidad: coste, posicion };
}

function simulateMove(tablero, posicion, turn, movimientos){
    const newTablero=tablero.slice();
    newTablero[posicion]=turn;
    const newMovimientos=movimientos?.slice();
    newMovimientos.push(posicion);
    if(newMovimientos.length>6){
        const lastIndex=newMovimientos.shift();
        newTablero[lastIndex]=null;
    }
    return { newTablero, newMovimientos };
}

export function moveIA(tablero, maxDepth, maximizingPlayer, movimientos){
    const resultado=minimax(tablero, 0, maxDepth, -Infinity, Infinity, maximizingPlayer, maximizingPlayer, movimientos);
    return { posicion: resultado.posicion }
}