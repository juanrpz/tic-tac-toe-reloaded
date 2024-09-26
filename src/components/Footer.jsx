import PropTypes from 'prop-types';

export function Footer({movimiento, movimientos, aiTurn}){
    return (
        <footer className='footer'>
            <h3>Movimiento usuario {aiTurn}</h3>
            {
                movimiento.posicion
            }
            <h3>Lista movimientos</h3>
            {
                movimientos.join(', ')
            }
        </footer>
    )
}

Footer.propTypes={
    movimiento: PropTypes.shape({
        posicion: PropTypes.number.isRequired
    }),
    movimientos: PropTypes.arrayOf(PropTypes.number).isRequired,
    aiTurn: PropTypes.number.isRequired
}