import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'; 

import Home from './components/Home'; 
import Crossword from './components/Crossword'; 
import Wordsearch from './components/Wordsearch'; 
import WhackAMole from './components/WhackAMole'; 


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Wordsearch" element={<Wordsearch />} />
          <Route exact path="/Crossword" element={<Crossword />} />
          <Route exact path="/WhackAMole" element={<WhackAMole />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;