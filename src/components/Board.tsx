import React, { useEffect, useMemo, useState } from 'react';
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
    const [answerColor, setAnswerColor] = useState<string>('');
    const [baseColor, setBaseColor] = useState<string>('');

    useEffect(() => {
        setBlockCount(Math.round((stage + 0.5) / 2) + 1);
    }, [stage]);

    useEffect(() => {
        setBlockTotalCount(Math.pow(blockCount, 2));
        setBlockSize(360 / blockCount - 4);
    }, [blockCount]);

    useEffect(() => {
        setAnswer(Math.floor(Math.random() * blockTotalCount));

        let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);
        let answerR = randomR < 128 ? randomR + (40 - stage) : randomR - (40 - stage);
        let answerG = randomG < 128 ? randomG + (40 - stage) : randomG - (40 - stage);
        let answerB = randomB < 128 ? randomB + (40 - stage) : randomB - (40 - stage);
        setBaseColor(`rgb(${randomR}, ${randomG}, ${randomB})`);
        setAnswerColor(`rgb(${answerR}, ${answerG}, ${answerB})`);
    }, [stage, blockTotalCount]);

    return (
        <div style={{ maxWidth: '360px', display: 'flex', flexWrap: 'wrap' }}>
            {Array.from(Array(blockTotalCount), (e, index) => {
                return index === answer
                    ?
                    <AnswerBlock key={index} size={blockSize} color={answerColor} onClickAnswer={onClickAnswer} />
                    :
                    <BaseBlock key={index} size={blockSize} color={baseColor} onClickBase={onClickBase} />
            })}
        </div>
    )
}

Board.defaultProps = {

}

export default Board;