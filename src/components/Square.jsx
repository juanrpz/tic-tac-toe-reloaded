import PropTypes from 'prop-types'

export const Square=({children, updateBoard, index, isSelected, opacidad})=>{
    const className=isSelected?'square is-selected':'square';
    const style=opacidad===index?{opacity: 0.5}:{};

    const handleClick=()=>{
        updateBoard(index);
    }

    return (
        <div className={className} onClick={handleClick}>
            <div style={style}>
                {children}
            </div>
        </div>
    )
}

Square.propTypes={
    children: PropTypes.node.isRequired,
    updateBoard: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isSelected: PropTypes.bool.isRequired,
    opacidad: PropTypes.number
}