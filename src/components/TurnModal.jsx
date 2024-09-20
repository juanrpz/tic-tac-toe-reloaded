import { TURNS } from "../constants";
import { Square } from "./Square";

export function TurnModal({start, setAiTurn}){
    if(!start){
        return null;
    }


    const handleClick=(index)=>{
        if(index===0){
            setAiTurn(TURNS.O)
        } else {
            setAiTurn(TURNS.X)
        }
    }

    return (
        <section className='modal'>
            <div className='text'>
                <h2>Elige tu turno</h2>
                <header className="win">
                    <Square opacidad={null} index={0} updateBoard={handleClick} >{TURNS.X}</Square>
                </header>
                <header className="win">
                    <Square opacidad={null} index={1} updateBoard={handleClick} >{TURNS.O}</Square>
                </header>
            </div>
        </section>
    )
}