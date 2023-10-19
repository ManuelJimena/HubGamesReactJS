import React from 'react';

import Card from '../../components/Card/Card';
import CardGame from '../../components/CardGame/CardGame';
import Title from '../../components/Title/Title';

const Memorama = () => {
  return (
    <>
      <Title text="Memorama" />
      <div className="memorama">
        <CardGame>
          <Card />
        </CardGame>
      </div>
    </>
  );
};

export default Memorama;
