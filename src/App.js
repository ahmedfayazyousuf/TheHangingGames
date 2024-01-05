import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.min.css';


import Home from './components/Home'; 
import Crossword from './components/Crossword'; 
import Wordsearch from './components/Wordsearch'; 
import WhackAMole from './components/WhackAMole'; 
import Hangman from './components/Hangman'; 
import MemoryGame from './components/MemoryGame'; 
import TicTacToe from './components/TicTacToe'; 
import TriviaQuiz from './components/TriviaQuiz/index.js';
import TriviaQuizScore from './components/TriviaQuiz/score.js';
import FlappyBird from './components/FlappyBird/index.js';
import Puzzle from './components/Puzzle/index.js';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Wordsearch" element={<Wordsearch />} />
          <Route exact path="/Crossword" element={<Crossword />} />
          <Route exact path="/WhackAMole" element={<WhackAMole />} />
          <Route exact path="/Hangman" element={<Hangman />} />
          <Route exact path="/MemoryGame" element={<MemoryGame />} />
          <Route exact path="/TicTacToe" element={<TicTacToe />} />
          <Route exact path="/TriviaQuiz" element={<TriviaQuiz />} />
          
          <Route exact path="/score" element={<TriviaQuizScore />} />
          <Route exact path="/Flappy" element={<FlappyBird />} />
          <Route exact path="/Puzzle" element={<Puzzle />} />


        </Routes>
      </Router>
    </>
  );
}

export default App;