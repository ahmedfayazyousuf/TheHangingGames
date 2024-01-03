import React, { useEffect, useState } from 'react';
import './styles.css'; // Import your CSS file

const SnakeGame = () => {
  const blockSize = 25;
  const totalRow = 17;
  const totalCol = 17;

  const [snakeX, setSnakeX] = useState(blockSize * 5);
  const [snakeY, setSnakeY] = useState(blockSize * 5);
  const [speedX, setSpeedX] = useState(0);
  const [speedY, setSpeedY] = useState(0);
  const [snakeBody, setSnakeBody] = useState([]);
  const [foodX, setFoodX] = useState(0);
  const [foodY, setFoodY] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const board = document.getElementById('board');
    board.height = totalRow * blockSize;
    board.width = totalCol * blockSize;

    placeFood();
    document.addEventListener('keyup', changeDirection);

    const updateInterval = setInterval(update, 1000 / 10);

    return () => {
      clearInterval(updateInterval);
      document.removeEventListener('keyup', changeDirection);
    };
  }, [snakeX, snakeY, speedX, speedY, snakeBody, gameOver]);

  const update = () => {
    if (gameOver) {
      return;
    }

    const context = document.getElementById('board').getContext('2d');
    context.fillStyle = 'green';
    context.fillRect(0, 0, totalCol * blockSize, totalRow * blockSize);

    context.fillStyle = 'yellow';
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX === foodX && snakeY === foodY) {
      setSnakeBody([...snakeBody, [foodX, foodY]]);
      placeFood();
    }

    const updatedBody = snakeBody.map((part, index) => (index === 0 ? [snakeX, snakeY] : snakeBody[index - 1]));

    setSnakeBody(updatedBody);

    context.fillStyle = 'white';
    setSnakeX(snakeX + speedX * blockSize);
    setSnakeY(snakeY + speedY * blockSize);
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    snakeBody.forEach((part) => {
      context.fillRect(part[0], part[1], blockSize, blockSize);
    });

    if (
      snakeX < 0 ||
      snakeX > totalCol * blockSize ||
      snakeY < 0 ||
      snakeY > totalRow * blockSize
    ) {
      setGameOver(true);
      alert('Game Over');
    }

    snakeBody.forEach((part) => {
      if (snakeX === part[0] && snakeY === part[1]) {
        setGameOver(true);
        alert('Game Over');
      }
    });
  };

  const changeDirection = (e) => {
    if (e.code === 'ArrowUp' && speedY !== 1) {
      setSpeedX(0);
      setSpeedY(-1);
    } else if (e.code === 'ArrowDown' && speedY !== -1) {
      setSpeedX(0);
      setSpeedY(1);
    } else if (e.code === 'ArrowLeft' && speedX !== 1) {
      setSpeedX(-1);
      setSpeedY(0);
    } else if (e.code === 'ArrowRight' && speedX !== -1) {
      setSpeedX(1);
      setSpeedY(0);
    }
  };

  const placeFood = () => {
    setFoodX(Math.floor(Math.random() * totalCol) * blockSize);
    setFoodY(Math.floor(Math.random() * totalRow) * blockSize);
  };

  return (
    <div>
      {/* <h1>
        Snake Game with <div className="geeks">Geeks For Geeks</div>
      </h1> */}
      <canvas id="board"></canvas>
    </div>
  );
};

export default SnakeGame;
