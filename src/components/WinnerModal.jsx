import PropTypes from 'prop-types'
import { Square } from "./Square";
import { Link } from 'react-router-dom';

export const WinnerModal=({winner, turn, resetGame})=>{
    if (winner===null){
        return null;
    }
    const winnerText=winner===false?'Empate!':'Ganador: ';

    return (
        <section className='winner'>
            <div className='text'>
                <h2>
                    {winnerText}
                </h2>
                {
                    winner&&
                    <header className='win'>
                        <Square opacidad={null} updateBoard={()=>console.log('prueba')}>{turn}</Square>
                    </header>
                }
                <footer>
                    <button onClick={resetGame}>Reiniciar</button>
                    <Link to='/' onClick={resetGame}>Salir del juego</Link>
                </footer>
            </div>
        </section>
    )
}

WinnerModal.propTypes={
    winner: PropTypes.bool,
    turn: PropTypes.string,
    resetGame: PropTypes.func.isRequired
}
