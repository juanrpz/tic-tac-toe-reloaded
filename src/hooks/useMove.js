import { useState } from 'react';
import { TURNS } from '../constants';

export function useMove(){
    const [board,setBoard]=useState(()=>{
        const boardFromStorage=window.localStorage.getItem('board');
        return boardFromStorage?JSON.parse(boardFromStorage):Array(9).fill(null);
    });
    const [turn, setTurn]=useState(()=>{
        const turnFromStorage=window.localStorage.getItem('turn');
        return turnFromStorage??TURNS.X;
    });
    const [winner, setWinner]=useState(null); //null no hay ganador, false empate

    const [movimientos, setMovements]=useState(()=>{
        const movimientosFromStorage=window.localStorage.getItem('movimientos');
        return movimientosFromStorage?JSON.parse(movimientosFromStorage):[];
    });

    return { board, setBoard, turn, setTurn, winner, setWinner, movimientos, setMovements };
}