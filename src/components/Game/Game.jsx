import "./Game.css";
import Board from "../Board/Board";
import Button from "../Button/Button";
import Message from "../Message/Message";

const Game = () => {

  return (
    <div className="game">
      <Message/>
      <div>
        <Board/>
      </div>
        <Button />
    </div>
  );
};

export default Game;