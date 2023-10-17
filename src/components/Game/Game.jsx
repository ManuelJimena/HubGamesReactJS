import './Game.css';

import React, { useEffect, useState } from 'react';

import Board from '../Board/Board';
import Button from '../Button/Button.jsx';
import Message from '../Message/Message.jsx';

const Game = () => {
  const [state, setState] = useState({
    isStarted: false,
    turn: 'X',
    board: Array(3)
      .fill()
      .map(() => Array(3).fill(null)),
    winner: null,
  });

  // función para validar el tablero
  const validateBoard = (board) => {
    // validamos filas
    let rowValues = board.map((row) => row.join(''));
    if (rowValues.includes('XXX') || rowValues.includes('OOO')) {
      return board[0][0];
    }
    // validamos columnas
    let colValues = board
      .reduce(
        (acc, cur) => {
          acc[0].push(cur[0]);
          acc[1].push(cur[1]);
          acc[2].push(cur[2]);
          return acc;
        },
        [[], [], []],
      )
      .map((col) => col.join(''));
    if (colValues.includes('XXX') || colValues.includes('OOO')) {
      return board[0][0];
    }
    // validamos diagonales
    let diagonalValues = [
      board[0][0] + board[1][1] + board[2][2],
      board[0][2] + board[1][1] + board[2][0],
    ];
    if (diagonalValues.includes('XXX') || diagonalValues.includes('OOO')) {
      return board[1][1];
    }
    // Empate
    if (board.flat().every((cell) => cell !== null)) {
      return 'draw';
    }
    // Si no gana nadie
    return null;
  };

  // Validamos el tablero cada vez que cambie el estado de la tabla
  useEffect(() => {
    const winner = validateBoard(state.board);
    if (winner !== null) {
      setState((prevState) => ({
        ...prevState,
        winner: winner,
      }));
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
    if (boardCopy[row][col] !== null || state.winner !== null) {
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

  return (
    <div className="game">
      <Message turn={state.turn} winner={state.winner} />
      {state.isStarted ? (
        <>
          <Board board={state.board} handleCellClick={handleCellClick} />
          <Button
            isStarted={state.isStarted}
            handleButtonClick={handleResetButtonClick}
          />
        </>
      ) : (
        <Button isStarted={state.isStarted} handleButtonClick={handleStartButtonClick} />
      )}
    </div>
  );
};

export default Game;
