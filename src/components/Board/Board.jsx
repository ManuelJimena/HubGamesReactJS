import './Board.css';
import Cell from '../Cell/Cell';

const Board = ({ board, handleCellClick }) => {
  return (
    <div className="board">
      {board.map((row, rowIndex) => {
        return (
          <div key={`row-${rowIndex}`} className="board-row">
            {row.map((cell, colIndex) => {
              return (
                <Cell
                  key={`cell-${colIndex}`}
                  value={cell}
                  isClickable={cell === null}
                  handleCellClick={() => handleCellClick(rowIndex, colIndex)}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;