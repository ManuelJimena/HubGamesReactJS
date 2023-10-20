import './CardGame.css';

import { useEffect, useState } from 'react';

import Button from '../Button/Button';
import Card from '../Card/Card';

function CardGame() {
  const [cards, setCards] = useState([
    { id: 1, value: '🐶', isFlipped: false },
    { id: 2, value: '🐶', isFlipped: false },
    { id: 3, value: '🐭', isFlipped: false },
    { id: 4, value: '🐭', isFlipped: false },
    { id: 5, value: '🦊', isFlipped: false },
    { id: 6, value: '🦊', isFlipped: false },
    { id: 7, value: '🐨', isFlipped: false },
    { id: 8, value: '🐨', isFlipped: false },
    { id: 9, value: '🐯', isFlipped: false },
    { id: 10, value: '🐯', isFlipped: false },
    { id: 11, value: '🐮', isFlipped: false },
    { id: 12, value: '🐮', isFlipped: false },
    { id: 13, value: '🐸', isFlipped: false },
    { id: 14, value: '🐸', isFlipped: false },
    { id: 15, value: '🐢', isFlipped: false },
    { id: 16, value: '🐢', isFlipped: false },
    { id: 17, value: '🐙', isFlipped: false },
    { id: 18, value: '🐙', isFlipped: false },
    { id: 19, value: '🦀', isFlipped: false },
    { id: 20, value: '🦀', isFlipped: false },
  ]);

  const [gameCards, setGameCards] = useState([]);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (gameCards.length === 2) {
      const [card1, card2] = gameCards;
      if (card1.value === card2.value) {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.id === card1.id || card.id === card2.id) {
              return { ...card, isFlipped: true };
            }
            return card;
          }),
        );
        setGameCards([]);
        return;
      }

      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.id === card1.id || card.id === card2.id) {
              return { ...card, isFlipped: false };
            }
            return card;
          }),
        );
        setGameCards([]);
      }, 1200);
    }
  }, [gameCards]);

  useEffect(() => {
    if (isStarted) {
      setCards((prevCards) => {
        return shuffle([...prevCards]);
      });
    }
  }, [isStarted]);

  const handleCardClick = (card) => {
    if (!card.isFlipped && gameCards.length < 2) {
      setGameCards([...gameCards, card]);
      setCards((prevCards) =>
        prevCards.map((prevCard) => {
          if (prevCard.id === card.id) {
            return { ...prevCard, isFlipped: true };
          }
          return prevCard;
        }),
      );
    }
  };

  const handleButtonClick = () => {
    if (isStarted) {
      const resetCards = cards.map((card) => {
        return { ...card, isFlipped: false };
      });
      setCards(resetCards);
      setGameCards([]);
      setIsStarted(false);
    } else {
      setIsStarted(true);
    }
  };

  const shuffle = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  return (
    <div className="card-game">
      <Button isStarted={isStarted} handleButtonClick={handleButtonClick} />
      {isStarted ? (
        <div className="game-board">
          {cards.map((card) => (
            <Card
              key={card.id}
              value={card.value}
              isFlipped={card.isFlipped}
              onClick={() => handleCardClick(card)}
            />
          ))}
        </div>
      ) : (
        <div className="start-message">
          <p>Presiona el botón para comenzar</p>
        </div>
      )}
    </div>
  );
}

export default CardGame;
