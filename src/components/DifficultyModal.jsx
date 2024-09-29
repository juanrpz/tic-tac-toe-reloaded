import PropTypes from 'prop-types';

export function Difficultymodal({setAiMaxDepth}){
    const handleClick=(index)=>{
        if(index===0){
            setAiMaxDepth(3)
        } else if(index===1){
            setAiMaxDepth(5)
        } else {
            setAiMaxDepth(7)
        }
    }

    return (
        <section className="modal">
            <div className="text">
                <h2>Choose Difficulty</h2>
                <button onClick={()=>handleClick(0)}>Fácil</button>
                <button onClick={()=>handleClick(1)}>Normal</button>
                <button onClick={()=>handleClick(2)}>Difícil</button>
            </div>
        </section>
    )
}

Difficultymodal.propTypes={
    setAiMaxDepth: PropTypes.func.isRequired
}
