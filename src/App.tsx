import React, { useCallback, useEffect, useState } from 'react';
import Header from 'components/Header';
import Board from 'components/Board';

function App() {
  const [stage, setStage] = useState<number>(1);
  const [time, setTime] = useState<number>(15);
  const [score, setScore] = useState<number>(0);
  
  const onClickAnswer = useCallback(() => {
    setStage(stage + 1);
    setTime(15);
    setScore(score + Math.pow(stage, 3) * time);
  }, [stage, time, score]);
  const onClickBase = useCallback(() => {
    if (time < 3) {
      setTime(0);
    } else {
      setTime(time - 3);
    }
  }, [time]);

  useEffect(() => {
    if (time <= 0) {
      alert(`GAME OVER!\n스테이지: ${stage}, 점수: ${score}`);
      setStage(1);
      setTime(15);
      setScore(0);
    }

    const timeInterval = setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
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
