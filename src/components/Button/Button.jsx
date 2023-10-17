import './Button.css';

const Button = ({ isStarted, handleButtonClick }) => {
  return (
    <button className="button" onClick={handleButtonClick}>
      {isStarted ? 'Reset' : 'Start'}
    </button>
  );
};

export default Button;
