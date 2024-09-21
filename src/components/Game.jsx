import '../App.css'
import { useState } from 'react';
import confetti from 'canvas-confetti'
import { Square } from './Square';
import { Board } from './Board';
import { TURNS } from '../constants';
import { checkWinner, getOpacityIndex } from '../logic/board';
import { WinnerModal } from './WinnerModal';
import { saveGameStorage, resetGameStorage } from '../logic/storage';
import { moveIA } from '../logic/ia';
import { Footer } from './Footer';
import { TurnModal } from './TurnModal';
import { Link } from 'react-router-dom';
import { useAIMove } from '../hooks/useAIMove';
import { IS_DEVELOPMENT } from '../config';

export function Game() {
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
        setMovements(newMovimientos);


        const newWinner=checkWinner(newBoard,turn);
        if(newWinner){
            confetti();
            setWinner(true);
        }else if(newBoard.every(square=>square!==null)){
            setWinner(false);
        }else{
            const newTurn=turn===TURNS.X?TURNS.O:TURNS.X;
            setTurn(newTurn);
            saveGameStorage(newBoard, newTurn,newMovimientos);
        }
    }

    const { aiTurn, handleAiTurnChange }=useAIMove({turn, board, movimientos, updateBoard})

    const resetGame=()=>{
        setBoard(Array(9).fill(null));
        setTurn(TURNS.X);
        setWinner(null);
        setMovements([]);
        handleAiTurnChange(null)

        resetGameStorage();
    }

    return (
        <>
            <div className='board'>
                <button onClick={resetGame}>Reset del juego</button>
                <Link to='/' onClick={resetGame}>Salir del juego</Link>
            </div>
            <main className='board'>
                <Board board={board} updateBoard={updateBoard} indexOpacidad={getOpacityIndex(movimientos)}/>
                <section className='turn'>
                    <Square isSelected={turn===TURNS.X} opacidad={null}>{TURNS.X}</Square>
                    <Square isSelected={turn===TURNS.O} opacidad={null}>{TURNS.O}</Square>
                </section>
                <section>
                    <WinnerModal winner={winner} turn={turn} resetGame={resetGame}/>
                </section>
                <section>
                    <TurnModal start={aiTurn===null} setAiTurn={handleAiTurnChange} />
                </section>
            </main>
            { IS_DEVELOPMENT&&<Footer movimiento={moveIA(board,3,aiTurn,movimientos.slice())} movimientos={movimientos} aiTurn={aiTurn}/> }
        </>
    )
}
