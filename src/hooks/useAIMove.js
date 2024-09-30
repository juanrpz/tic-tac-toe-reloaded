import { useState, useEffect } from'react';
import { moveIA } from '../logic/ia';
import confetti from 'canvas-confetti'
import { TURNS } from '../constants';
import { checkWinner } from '../logic/board';
import { useMove } from './useMove';

export const useAIMove =()=>{
    const { board, setBoard, turn, setTurn, winner, setWinner, movimientos, setMovimientos }=useMove();

    const [aiTurn,setAiTurn]=useState(null);
    const [aiMaxDepth, setAiMaxDepth]=useState(null);

    const updateBoard=(index,isAiMove=false)=>{
        if(board[index] || winner || (aiTurn===turn&&!isAiMove)) return;
        const newBoard=board.slice();
        newBoard[index]=turn;
        setBoard(newBoard);

        const newMovimientos=[...movimientos, index];
        if(newMovimientos.length>6){
            const lastIndex=newMovimientos.shift();
            newBoard[lastIndex]=null;
        }
        setMovimientos(newMovimientos);


        const newWinner=checkWinner(newBoard,turn);
        if(newWinner){
            confetti();
            setWinner(true);
        }else if(newBoard.every(square=>square!==null)){
            setWinner(false);
        }else{
            const newTurn=turn===TURNS.X?TURNS.O:TURNS.X;
            setTurn(newTurn);
        }
    }

    const resetGame=()=>{
        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null);
        setMovimientos([]);
        handleAiTurnChange(null);
        setAiMaxDepth(null);
    }

    useEffect(()=>{
        if(aiMaxDepth){
            if(turn===aiTurn){
                setTimeout(() => {
                    const move=moveIA(board,aiMaxDepth,aiTurn,movimientos);
                    updateBoard(move.posicion,true);
                }, 500);
            }
        }
    },[turn,board,aiTurn,aiMaxDepth,movimientos])

    const handleAiTurnChange=(turn)=>{
        setAiTurn(turn);
    }

    return { resetGame, board, updateBoard, movimientos, turn, winner, aiTurn, aiMaxDepth, handleAiTurnChange, IS_AI_GAME:true, setAiMaxDepth };
}