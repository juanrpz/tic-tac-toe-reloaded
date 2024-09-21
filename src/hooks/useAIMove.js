import { useState, useEffect } from'react';
import { moveIA } from '../logic/ia';

export const useAIMove =({turn, board, movimientos, updateBoard})=>{
    const [aiTurn,setAiTurn]=useState(null);
    const [aiMaxDepth, setAiMaxDepth]=useState(3);

    useEffect(()=>{
        if(turn===aiTurn){
            setTimeout(() => {
                const move=moveIA(board,aiMaxDepth,aiTurn,movimientos);
                updateBoard(move.posicion,true);
            }, 500);
        }
    },[turn,board,aiTurn])

    const handleAiTurnChange=(turn)=>{
        setAiTurn(turn);
    }

    return { aiTurn, handleAiTurnChange, setAiMaxDepth };
}