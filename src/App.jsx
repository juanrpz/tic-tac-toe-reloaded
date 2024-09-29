import { Routes, Route } from 'react-router-dom'
import './App.css'
import { MainMenu } from './components/Menus/MainMenu'
import { Game } from './components/Game'
import { useAIMove } from './hooks/useAIMove'
import { usePvPMove } from './hooks/usePvPMove'
function App() {
    return(
        <header>
            <h1>TIC TAC TOE RELOADED</h1>
            <Routes>
                <Route path='/' element={<MainMenu />} />
                <Route path='/game-ia' element={<Game customHook={useAIMove} />} />
                <Route path='/game-local' element={<Game customHook={usePvPMove} />} />
            </Routes>
        </header>
    )
}

export default App
