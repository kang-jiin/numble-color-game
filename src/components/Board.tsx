import React, { useEffect, useState } from 'react';
import AnswerBlock from './AnswerBlock';
import BaseBlock from './BaseBlock';

type BoardProps = {
    stage: number;
    onClickAnswer: any;
    onClickBase: any;
}

function Board({ stage, onClickAnswer, onClickBase }: BoardProps) {
    const [blockCount, setBlockCount] = useState<number>(2);
    const [blockTotalCount, setBlockTotalCount] = useState<number>(4);
    const [blockSize, setBlockSize] = useState<number>(176);
    const [answer, setAnswer] = useState<number>(Math.floor(Math.random() * blockTotalCount));

    useEffect(() => {
        setBlockCount(Math.round((stage + 0.5) / 2) + 1);
        setBlockTotalCount(Math.pow(blockCount, 2));
        setBlockSize(360 / blockCount - 4);
        setAnswer(Math.floor(Math.random() * blockTotalCount));
    }, [stage]);

    return (
        <div style={{ maxWidth: '360px', display: 'flex', flexWrap: 'wrap' }}>
            {Array.from(Array(blockTotalCount), (e, index) => {
                return index === answer
                    ?
                    <AnswerBlock key={index} size={blockSize} onClickAnswer={onClickAnswer} />
                    :
                    <BaseBlock key={index} size={blockSize} onClickBase={onClickBase} />
            })}
        </div>
    )
}

Board.defaultProps = {

}

export default Board;