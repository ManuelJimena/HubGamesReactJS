import './Message.css';

const Message = ({ turn, winner }) => {
  let message = 'Es el turno de ' + turn;
  if (winner !== null) {
    message = winner === 'draw' ? 'Empate!' : `El ganador es ${winner}!`;
  }
  return (
    <div className="message">
      <p>{message}</p>
    </div>
  );
};

export default Message;
