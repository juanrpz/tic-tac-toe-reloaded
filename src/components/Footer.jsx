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