export const saveGameStorage=(board,turn,movimientos)=>{
    window.localStorage.setItem('board',JSON.stringify(board));
    window.localStorage.setItem('turn',turn);
    window.localStorage.setItem('movimientos',JSON.stringify(movimientos));
}

export const resetGameStorage=()=>{
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
    window.localStorage.removeItem('movimientos');
}