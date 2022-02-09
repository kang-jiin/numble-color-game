import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Board from './components/Board';

function App() {
  const [stage, setStage] = useState<number>(1);
  const [time, setTime] = useState<number>(15);
  const [score, setScore] = useState<number>(0);
  const onClickAnswer = () => {
    setStage(stage + 1);
    setTime(15);
    setScore(Math.pow(stage, 3) * time);
  }
  const onClickBase = () => {
    setTime(time - 3);
  }

  useEffect(() => {
    const timeInterval = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        alert("GAME OVER");
        setStage(1);
        setTime(15);
        setScore(0);
      }
    }, 1000);

    return () => clearTimeout(timeInterval);
  }, [time]);

  return (
    <div className="App">
      <Header stage={stage} time={time} score={score} />
      <Board stage={stage} onClickAnswer={onClickAnswer} onClickBase={onClickBase} />
    </div>
  );
}

export default App;
