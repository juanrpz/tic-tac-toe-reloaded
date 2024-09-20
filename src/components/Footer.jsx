import { TURNS } from "../constants"

export function Footer({movimiento, movimientos}){
    return (
        <footer className='footer'>
            <h3>Movimiento usuario {TURNS.X}</h3>
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