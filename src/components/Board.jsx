import PropTypes from 'prop-types'
import { Square } from "./Square"

export const Board=({board,updateBoard,indexOpacidad})=>{
    return(
        <section className='game'>
            {
                board.map((square, index)=>(
                    <Square 
                        key={index} 
                        index={index}
                        updateBoard={updateBoard}
                        opacidad={indexOpacidad}
                    >
                        {square}
                    </Square>
                ))
            }
        </section>
    )
}

Board.propTypes = {
    board: PropTypes.arrayOf(PropTypes.string).isRequired,
    updateBoard: PropTypes.func.isRequired,
    indexOpacidad: PropTypes.number,
}