import './Board.css';

import Cell from '../Cell/Cell';

const Board = () => {
  return (
    <div className="board">
      <div className="board-row">
        <Cell />
      </div>
    </div>
  );
};

export default Board;
