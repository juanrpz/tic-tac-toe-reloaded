import { Link } from "react-router-dom";

export function MainMenu(){
    return (
        <main className="menu">
            <h1>Menú Principal</h1>
            <Link to="/game-ia">Jugador vs IA</Link>
            <Link to="/game-local" >Jugador vs Jugador</Link>
        </main>
    )
}