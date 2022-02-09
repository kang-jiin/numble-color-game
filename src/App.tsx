import React, { useState } from 'react';
import Board from './components/Board';
import Header from './components/Header';

function App() {
  const [stage, setStage] = useState<number>(1);
  const [time, setTime] = useState<number>(15);
  const [score, setScore] = useState<number>(0);
  const onClickAnswer = () => {
    setStage(stage + 1);
    setTime(time + 5);
    setScore(Math.pow(stage, 3) * time);
  }

  return (
    <div className="App">
      <Header stage={stage} time={time} score={score} />
      <Board stage={stage} onClickAnswer={onClickAnswer} />
    </div>
  );
}

export default App;
