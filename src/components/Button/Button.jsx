import './Button.css';

const Button = ({ isStarted, handleButtonClick }) => {
  return (
    <button className="button" onClick={handleButtonClick}>
      {isStarted ? 'Resetear' : 'Comenzar'}
    </button>
  );
};

export default Button;
