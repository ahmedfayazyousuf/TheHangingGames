
import { Link } from 'react-router-dom';
import React from 'react';

function App() {

  return (
    <div style={{display: 'flex', justifyContent: 'start', alignItems: 'center', bottom: '0', position: 'absolute', width: '100vw', paddingLeft: '20px', paddingRight: '20px'}}>
        <Link to="/">
            <button style={{height: '30px', width: '70px', fontSize: '16px', background: 'black', color: '#00f526', border: '1px solid #00f526', cursor: 'grab', marginRight: '15px'}}>Return</button>
        </Link>
        <h4 style={{color: '#00f526'}}>The Hanging House</h4>
    </div>
  );
}

export default App;