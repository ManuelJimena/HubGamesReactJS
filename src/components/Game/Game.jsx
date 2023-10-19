import './Game.css';

import React, { useEffect, useState } from 'react';

import Board from '../Board/Board';
import Button from '../Button/Button';
import Message from '../Message/Message';

const Game = () => {
  const [state, setState] = useState({
    isStarted: false,
    turn: 'X',
    board: Array(3)
      .fill()
      .map(() => Array(3).fill(null)),
    winner: null,
  });

  const validateBoard = (board) => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2] &&
        board[i][0] !== null
      ) {
        return board[i][0];
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i] &&
        board[0][i] !== null
      ) {
        return board[0][i];
      }
    }

    if (
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2] &&
      board[0][0] !== null
    ) {
      return board[0][0];
    }
    if (
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0] &&
      board[0][2] !== null
    ) {
      return board[0][2];
    }

    if (board.flat().every((cell) => cell !== null)) {
      return 'draw';
    }

    return null;
  };

  useEffect(() => {
    const winner = validateBoard(state.board);
    if (winner !== null) {
      setState((prevState) => ({
        ...prevState,
        winner: winner,
      }));
    } else {
      if (state.turn === 'O') {
        const timer = setTimeout(() => {
          makeCPUMove();
        }, 1000);
        return () => clearInterval(timer);
      }
    }
  }, [state.board]);

  const handleStartButtonClick = () => {
    setState((prevState) => ({
      ...prevState,
      isStarted: true,
    }));
  };

  const handleCellClick = (row, col) => {
    const boardCopy = [...state.board];
    if (boardCopy[row][col] !== null || state.winner !== null || state.turn === 'O') {
      return;
    }
    boardCopy[row][col] = state.turn;
    setState((prevState) => ({
      ...prevState,
      board: boardCopy,
      turn: prevState.turn === 'X' ? 'O' : 'X',
    }));
  };

  const handleResetButtonClick = () => {
    setState({
      isStarted: false,
      turn: 'X',
      board: Array(3)
        .fill()
        .map(() => Array(3).fill(null)),
      winner: null,
    });
  };

  const makeCPUMove = () => {
    const emptyCells = [];
    state.board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === null) {
          emptyCells.push([rowIndex, colIndex]);
        }
      });
    });

    const [row, col] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const boardCopy = [...state.board];
    boardCopy[row][col] = 'O';
    setState((prevState) => ({
      ...prevState,
      board: boardCopy,
      turn: 'X',
    }));
  };

  return (
    <div className="game">
      <Message turn={state.turn} winner={state.winner} />
      {state.isStarted ? (
        <>
          <Button
            isStarted={state.isStarted}
            handleButtonClick={handleResetButtonClick}
          />
          <div className="board-container">
            <Board board={state.board} handleCellClick={handleCellClick} />
          </div>
        </>
      ) : (
        <Button isStarted={state.isStarted} handleButtonClick={handleStartButtonClick} />
      )}
    </div>
  );
};

export default Game;
