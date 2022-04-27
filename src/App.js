import { useState, useEffect } from 'react';
import Die from './components/Die';
import RollButton from './components/RollButton';
function App() {
  const [dice, setDice] = useState(() => [...Array(10).keys()].map(
    (el, i) => ({id: i+1, num: 1, held: false})
  ));

  const rollDice = () => {
    setDice(prev => prev.map(die => die.held ? die
      : {...die, num: Math.ceil(Math.random() * 6)}
    ));
  };
  // Always roll dice once to start.
  useEffect(rollDice, []);

  const resetDice = () => {
    setDice(prev => prev.map(die => ({...die, held: false})));
    rollDice();
  };

  const switchHeld = (id) => {
    setDice(prev => prev.map(el => el.id === id ? {...el, held: !el.held} : el));
  };

  return (
    <main className="main">
      <h1 className="title">Tenzies</h1>
      <p className="directions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="die-container">
        {dice.map((el) => <Die
          key={el.id}
          dieNum={el.num}
          held={el.held}
          handleClick={() => switchHeld(el.id)}
        />)}
      </div>
      <RollButton
        dice={dice}
        rollDice={rollDice}
        resetDice={resetDice}
      />
    </main>
  );
}

export default App;
