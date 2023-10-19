import './Cell.css';

const Cell = ({ value, isClickable, handleCellClick }) => {
  return (
    <button
      className={`cell ${!isClickable ? 'unavailable' : ''}`}
      onClick={handleCellClick}
      disabled={!isClickable}
    >
      {value}
    </button>
  );
};

export default Cell;
