import React, { useState } from 'react';
import '../1_Assets/Grid.css';

const Crossword = () => {
  const successConditions = [
    { row: 1, col: 1, letter: 'S' },
    { row: 1, col: 2, letter: 'U' },
    { row: 1, col: 3, letter: 'C' },
    { row: 1, col: 4, letter: 'C' },
    { row: 1, col: 5, letter: 'E' }, 
    { row: 1, col: 6, letter: 'S' },
    { row: 1, col: 7, letter: 'S' },
  ];


const collaborationConditions = [
    { row: 1, col: 3, letter: 'C' },
    { row: 2, col: 3, letter: 'O' },
    { row: 3, col: 3, letter: 'L' },
    { row: 4, col: 3, letter: 'L' },
    { row: 5, col: 3, letter: 'A' },
    { row: 6, col: 3, letter: 'B' },
    { row: 7, col: 3, letter: 'O' },
    { row: 8, col: 3, letter: 'R' },
    { row: 9, col: 3, letter: 'A' },
    { row: 10, col: 3, letter: 'T' },
    { row: 11, col: 3, letter: 'I' },
    { row: 12, col: 3, letter: 'O' },
    { row: 13, col: 3, letter: 'N' },
  ];



  const getCellStyle = (row, col) => {
    const word = findWord(row, col);
    if (word) {
      if (word.input) {
        return { backgroundColor: 'white', color: 'black' };
      } else {
        return { backgroundColor: 'black', color: 'white', border: '0.1px solid white' };
      }
    }
    const defaultLetter = defaultLetters[`${row}-${col}`];
    const isSuccess = successConditions.every(
      (condition) => condition.row === row && condition.col === col && grid[row][col] === condition.letter
    );
    return {
      backgroundColor: isSuccess ? 'lightgreen' : 'black',
      color: 'black',
      readOnly: true,
      defaultLetter,
    };
  };
  
  

  const handleSubmit = () => {
    const isSuccess = successConditions.every((condition) => {
      const { row, col, letter } = condition;
      return grid[row][col] === letter;
    });

    const isCollaboration = collaborationConditions.every((condition) => {
      const { row, col, letter } = condition;
      return grid[row][col] === letter;
    });

    if (isCollaboration) {
      console.log('COLLABORATION');
    } else {
      console.log('No, some conditions are not met for COLLABORATION.');
    }


    if (isSuccess) {
      console.log('SUCCESS');
    } else {
      console.log('No, some conditions are not met for SUCCESS.');
    }
  };

  const defaultLetters = {
    '4-9': 'M',
    '5-9': 'U',
    '6-9': 'G',
    '12-2': 'T',
    '12-3': 'O',
    '12-4': 'T',
    '12-5': 'E',
    '12-6': 'B',
    '12-7': 'A',
    '12-8': 'G',
    '0-18': 'B',
    '1-18': 'O',
    '2-18': 'T',
    '3-18': 'T',
    '4-18': 'L',
    '5-18': 'E',
    '4-13': 'C',
    '4-14': 'H',
    '4-15': 'O',
    '4-16': 'C',
    '4-17': 'O',
    '4-19': 'A',
    '4-20': 'T',
    '4-21': 'E',
  };

  const initialGrid = Array.from({ length: 15 }, () => Array(22).fill(''));

  for (const key in defaultLetters) {
    const [row, col] = key.split('-').map(Number);
    initialGrid[row][col] = defaultLetters[key];
  }

  const [grid, setGrid] = useState(initialGrid);

  const words = [
    { word: 'SUCCESS', start: { row: 1, col: 1 }, end: { row: 1, col: 7 } },
    { word: 'COLLABORATION', start: { row: 1, col: 3 }, end: { row: 13, col: 3 } },
    { word: 'BREAKTROUGHS', start: { row: 5, col: 0 }, end: { row: 5, col: 12 } },
    { word: 'GROWTH', start: { row: 7, col: 1 }, end: { row: 7, col: 6 } },
    { word: 'THEHANGINGHOUSE', start: { row: 10, col: 3 }, end: { row: 10, col: 17 } },
    { word: 'OPPORTUNITY', start: { row: 4, col: 15 }, end: { row: 14, col: 15 } },
  ];

  const staticWords = [
    { word: 'MUG', start: { row: 4, col: 9 }, end: { row: 6, col: 9 } },
    { word: 'BOTTLE', start: { row: 0, col: 18 }, end: { row: 5, col: 18 } },
    { word: 'CHOCOLATE', start: { row: 4, col: 13 }, end: { row: 4, col: 21 } },
    { word: 'TOTEBAG', start: { row: 12, col: 2 }, end: { row: 12, col: 8 } },
  ];

  const updateGrid = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row] = [...newGrid[row]];
    newGrid[row][col] = value;
    setGrid(newGrid);
    checkWordCompletion();
  };

  const renderGrid = () => {
    return grid.map((row, rowIndex) => (
      <div key={rowIndex} className="crossword-row">
        {row.map((col, colIndex) => {
          const cellStyle = getCellStyle(rowIndex, colIndex);
          const initialCellValue = grid[rowIndex][colIndex];

          return cellStyle.isStatic ? (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="static-word"
              style={cellStyle}
            >
              {initialCellValue || cellStyle.defaultLetter}
            </div>
          ) : (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              value={initialCellValue}
              style={cellStyle}
              readOnly={cellStyle.readOnly}
              maxLength={1}
              onChange={(e) => {
                if (!cellStyle.readOnly) {
                  const uppercaseValue = e.target.value.toUpperCase();
                  updateGrid(rowIndex, colIndex, uppercaseValue);
                }
              }}
            />
          );
        })}
      </div>
    ));
  };

  const findWord = (row, col) => {
    const foundWord = words.find(
      (word) =>
        (row >= word.start.row && row <= word.end.row && col >= word.start.col && col <= word.end.col) ||
        (row <= word.start.row && row >= word.end.row && col <= word.start.col && col >= word.end.col)
    );

    if (foundWord) {
      return { ...foundWord, input: true };
    }

    const foundStaticWord = staticWords.find(
      (word) =>
        row >= word.start.row && row <= word.end.row && col >= word.start.col && col <= word.end.col
    );

    if (foundStaticWord) {
      return { ...foundStaticWord, input: false };
    }

    return null;
  };

  const checkWordCompletion = () => {
    words.forEach((word) => {
      const { start, end } = word;
      const enteredWord = grid[start.row].slice(start.col, end.col + 1).join('');

      if (enteredWord === word.word) {
        markWordAsSuccess(start.row, start.col, end.row, end.col, word.word);
        alert(`Success! You completed the word: ${word.word}`);
      }
    });
  };

  const markWordAsSuccess = (startRow, startCol, endRow, endCol, word) => {
    for (let i = startCol; i <= endCol; i++) {
      const cell = document.querySelector(`#cell-${startRow}-${i}`);
      cell.classList.add('success');
      cell.readOnly = true;
    }

    console.log(`Success! You completed the word: ${word}`);
  };

  return( 
    <div style={{display: 'flex', height: '100vh', width: '100vw', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
      <h1 style={{width: '100%', textAlign:'center'}}>THE HANGING HOUSE</h1>

      <div className="crossword">{renderGrid()}</div>
      
      <button style={{height: '50px', width: '120px', fontSize: '16px', background: 'black', color: '#00f526', border: '1px solid #00f526', marginTop: '30px'}} onClick={handleSubmit}>SUBMIT</button>




      <div style={{width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>

        <div style={{width: '50%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '10px', flexDirection: 'column'}}>
          <p>1. SUCCESS</p>
          <p>2. COLLABORATION</p>
          <p>3. BREAKTHROUGHS</p>
        </div>

        <div style={{width: '50%', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', padding: '10px', flexDirection: 'column'}}>
          <p>4. GROWTH</p>
          <p>5. THEHANGINGHOUSE</p>
          <p>6. OPPORTUNITY</p>
        </div>  

        
      </div>

    </div>
  );
};

export default Crossword;
