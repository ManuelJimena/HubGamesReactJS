import './Card.css';

const Card = ({ value, isFlipped, onClick }) => {
  const handleCardClick = () => {
    if (!isFlipped) {
      onClick();
    }
  };

  return (
    <div className={`card ${isFlipped ? 'is-flipped' : ''}`} onClick={handleCardClick}>
      <div className="front"></div>
      <div className="back"></div>
      <div className="content">{isFlipped && value}</div>
    </div>
  );
};

export default Card;
