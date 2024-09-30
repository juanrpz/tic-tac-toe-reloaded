import { useMove } from "./useMove";
import confetti from "canvas-confetti";
import { checkWinner } from "../logic/board";
import { TURNS } from "../constants";

export function usePvPMove(){
    const { board, setBoard, turn, setTurn, winner, setWinner, movimientos, setMovimientos }=useMove();

    const updateBoard=(index)=>{
        if(board[index] || winner) return;
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
    }

    return { resetGame, board, updateBoard, movimientos, turn, winner, IS_AI_GAME:false };
}