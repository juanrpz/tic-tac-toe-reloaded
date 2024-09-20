import { Routes, Route } from 'react-router-dom'
import './App.css'
import { MainMenu } from './components/Menus/MainMenu'
import { Game } from './components/Game'
function App() {
    return(
        <header>
            <h1>TIC TAC TOE RELOADED</h1>
            <Routes>
                <Route path='/' element={<MainMenu />} />
                <Route path='/game-ia' element={<Game />} />
            </Routes>
        </header>
    )
}

export default App
