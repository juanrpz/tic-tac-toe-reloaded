import '../App.css'
import { Square } from './Square';
import { Board } from './Board';
import { TURNS } from '../constants';
import { getOpacityIndex } from '../logic/board';
import { WinnerModal } from './WinnerModal';
import { moveIA } from '../logic/ia';
import { Footer } from './Footer';
import { TurnModal } from './TurnModal';
import { Link } from 'react-router-dom';
import { IS_DEVELOPMENT } from '../config';
import { Difficultymodal } from './DifficultyModal';
import PropTypes from 'prop-types';

export function Game({customHook}) {
    const { resetGame, board, updateBoard, movimientos, turn, winner, aiTurn, aiMaxDepth, handleAiTurnChange, IS_AI_GAME, setAiMaxDepth } = customHook();

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
                {
                    (IS_AI_GAME && !aiMaxDepth) &&
                    <section>
                        <Difficultymodal start={!aiMaxDepth} setAiMaxDepth={setAiMaxDepth} />
                    </section>
                }
                { 
                    (IS_AI_GAME&&!aiTurn) &&
                    <section>
                        <TurnModal start={aiTurn===null} setAiTurn={handleAiTurnChange} />
                    </section>
                }
            </main>
            { IS_AI_GAME && IS_DEVELOPMENT && <Footer movimiento={moveIA(board,3,aiTurn,movimientos.slice())} movimientos={movimientos} aiTurn={aiTurn}/> }
        </>
    )
}

Game.propTypes = {
    customHook: PropTypes.func.isRequired,
}
