import React from 'react';
import { Link } from 'react-router-dom';
import '../1_Assets/Grid.css';
import Logo from '../1_Assets/Logo2.png';
import Crossword from '../1_Assets/Thumbnails/Crossword.jpg';
import Wordsearch from '../1_Assets/Thumbnails/Wordsearch.jpg';
import Whackamole from '../1_Assets/Thumbnails/Whackamole.jpg';
import Hangman from '../1_Assets/Thumbnails/Hangman.jpg';

import MemoryGame from '../1_Assets/Thumbnails/MemoryGame.jpg';
import TicTacToe from '../1_Assets/Thumbnails/TicTacToe.png';

const Home = () => {

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh'}}>

        <img style={{width: '100px', marginTop:'-100px'}} alt='thhlogo' src={Logo}/>

        <h1 style={{width: '100%', textAlign:'center'}}>THE HANGING GAMES</h1>  


        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
          <div style={{height: '100px', width: '160px', display: 'flex', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple', backgroundImage: `url(${Crossword})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/Crossword" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              CROSSWORD
            </Link>
          </div>
            
          <div style={{height: '100px', width: '160px', display: 'flex', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple', backgroundImage: `url(${Wordsearch})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/WordSearch" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              WORDSEARCH
            </Link>
          </div>
        </div>




        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <div style={{height: '100px', width: '160px', display: 'flex', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple', backgroundImage: `url(${Whackamole})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/whackamole" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              WHACK-A-MOLE
            </Link>
          </div>

          <div style={{height: '100px', width: '160px', display: 'flex', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple', backgroundImage: `url(${Hangman})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/hangman" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              HANGMAN
            </Link>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
          <div style={{height: '100px', width: '160px', display: 'flex', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple', backgroundImage: `url(${MemoryGame})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/memorygame" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              MEMORY GAME
            </Link>
          </div>

          <div style={{height: '100px', width: '160px', display: 'flex', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple', backgroundImage: `url(${TicTacToe})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/tictactoe" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              TIC TAC TOE
            </Link>
          </div>
        </div>

    </div>
  );
};

export default Home;
