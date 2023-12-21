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
            <Link to="/Crossword" className='start-btn' style={{textDecoration: 'none'}}>
            CROSSWORD
            </Link>
            <Link to="/WordSearch" className='start-btn' style={{textDecoration: 'none'}}>
            WORDSEARCH
            </Link>
        </div>

    </div>
  );
};

export default Home;
