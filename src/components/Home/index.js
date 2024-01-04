import React from 'react';
import { Link } from 'react-router-dom';
import '../1_Assets/Grid.css';
import Logo from '../1_Assets/Logo2.png'

const Home = () => {

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh'}}>

        <img style={{width: '100px', marginTop:'-150px'}} alt='thhlogo' src={Logo}/>

        <h1 style={{width: '100%', textAlign:'center'}}>THE HANGING GAMES</h1>  

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Link to="/Crossword" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              CROSSWORD
            </Link>
            <Link to="/WordSearch" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              WORDSEARCH
            </Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Link to="/whackamole" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              WHACK-A-MOLE
            </Link>
            <Link to="/hangman" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              HANGMAN
            </Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Link to="/memorygame" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              MEMORY GAME
            </Link>
            <Link to="/tictactoe" target='_blank' className='start-btn' style={{textDecoration: 'none'}}>
              TIC TAC TOE
            </Link>
        </div>

    </div>
  );
};

export default Home;
