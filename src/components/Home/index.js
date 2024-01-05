import React from 'react';
import { Link } from 'react-router-dom';
import '../1_Assets/Grid.css';
import Logo from '../1_Assets/Logo2.png';

import MobileIcon from '../1_Assets/mobicon.png';
import DesktopIcon from '../1_Assets/desktopicon.png';

import Crossword from '../1_Assets/Thumbnails/Crossword.jpg';
import Wordsearch from '../1_Assets/Thumbnails/Wordsearch.jpg';
import Whackamole from '../1_Assets/Thumbnails/Whackamole.jpg';
import Hangman from '../1_Assets/Thumbnails/Hangman.jpg';
import MemoryGame from '../1_Assets/Thumbnails/MemoryGame.jpg';
import TicTacToe from '../1_Assets/Thumbnails/TicTacToe.png';
import Puzzle from '../1_Assets/Thumbnails/Puzzle.jpg';
import Trivia from '../1_Assets/Thumbnails/Trivia.png';
import Snake from '../1_Assets/Thumbnails/Snake.jpg';
import Flappy from '../1_Assets/Thumbnails/Flappy.jpg';

const Home = () => { 

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%', width: '100vw'}}>

        <img style={{width: '100px', marginTop: '60px'}} alt='thhlogo' src={Logo}/>

        <h1 style={{width: '100%', textAlign:'center'}}>THE HANGING GAMES</h1>  

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', minWidth: '80vw', maxWidth: '100vw', paddingBottom: '100px'}}>
          <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'column', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Crossword})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/Crossword" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              CROSSWORD
            </Link>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', gap: '2px', marginTop: '5px', opacity: '0.7'}}>
              <img style={{width: '17px', position: 'sticky'}} src={MobileIcon}/>
              <img style={{width: '20px', position: 'sticky'}} src={DesktopIcon}/>
            </div>
          </div>
            
          <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'column', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Wordsearch})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/WordSearch" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              WORDSEARCH
            </Link>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', gap: '2px', marginTop: '5px', opacity: '0.7'}}>
              <img style={{width: '17px', position: 'sticky'}} src={MobileIcon}/>
              <img style={{width: '20px', position: 'sticky'}} src={DesktopIcon}/>
            </div>
          </div>


          <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'column', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Whackamole})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/whackamole" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              WHACK-A-MOLE
            </Link>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', gap: '2px', marginTop: '5px', opacity: '0.7'}}>
              <img style={{width: '17px', position: 'sticky'}} src={MobileIcon}/>
              <img style={{width: '20px', position: 'sticky'}} src={DesktopIcon}/>
            </div>
          </div>

          <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'column', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Hangman})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/hangman" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              HANGMAN
            </Link>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', gap: '2px', marginTop: '5px', opacity: '0.7'}}>
              <img style={{width: '17px', position: 'sticky'}} src={MobileIcon}/>
              <img style={{width: '20px', position: 'sticky'}} src={DesktopIcon}/>
            </div>
          </div>

          <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'column', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${MemoryGame})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/memorygame" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              MEMORY GAME
            </Link>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', gap: '2px', marginTop: '5px', opacity: '0.7'}}>
              <img style={{width: '17px', position: 'sticky'}} src={MobileIcon}/>
              <img style={{width: '20px', position: 'sticky'}} src={DesktopIcon}/>
            </div>
          </div>

          <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'column', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${TicTacToe})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/tictactoe" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              TIC TAC TOE
            </Link>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', gap: '2px', marginTop: '5px', opacity: '0.7'}}>
              <img style={{width: '17px', position: 'sticky'}} src={MobileIcon}/>
              <img style={{width: '20px', position: 'sticky'}} src={DesktopIcon}/>
            </div>
          </div>

          <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'column', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Puzzle})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/puzzle" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              PUZZLE GAME
            </Link>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', gap: '2px', marginTop: '5px', opacity: '0.7'}}>
              <img style={{width: '17px', position: 'sticky'}} src={MobileIcon}/>
              <img style={{width: '20px', position: 'sticky'}} src={DesktopIcon}/>
            </div>
          </div>

          <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'column', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Trivia})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/TriviaQuiz" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              TRIVIA APP
            </Link>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', gap: '2px', marginTop: '5px', opacity: '0.7'}}>
              <img style={{width: '17px', position: 'sticky'}} src={MobileIcon}/>
              <img style={{width: '20px', position: 'sticky'}} src={DesktopIcon}/>
            </div>
          </div>

          <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'column', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Snake})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/tictactoe" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              SNAKE GAME
            </Link>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', gap: '2px', marginTop: '5px', opacity: '0.7'}}>
              <img style={{width: '17px', position: 'sticky'}} src={MobileIcon}/>
              <img style={{width: '20px', position: 'sticky'}} src={DesktopIcon}/>
            </div>
          </div>

          <div style={{height: '100px', width: '160px', display: 'flex', flexDirection: 'column', margin: '5px', padding: '10px', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Flappy})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '15px', border: '1px solid grey'}}>
            <Link to="/flappy" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              FLAPPY BIRD
            </Link>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', gap: '2px', marginTop: '5px', opacity: '0.7'}}>
              <img style={{width: '17px', position: 'sticky'}} src={MobileIcon}/>
              <img style={{width: '20px', position: 'sticky'}} src={DesktopIcon}/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Home;
