import React, { useCallback, useEffect, useMemo, useState } from 'react';
import AnswerBlock from './AnswerBlock';
import BaseBlock from './BaseBlock';

type BoardProps = {
    stage: number;
    onClickAnswer: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onClickBase: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    maxWidth?: number;
}

function Board({ stage, onClickAnswer, onClickBase, maxWidth }: BoardProps) {
    const randomColors  = useCallback(() => {
        let baseR = Math.floor(Math.random() * 256);
        let baseG = Math.floor(Math.random() * 256);
        let baseB = Math.floor(Math.random() * 256);
        let answerR = baseR < 128 ? baseR + (40 - stage) : baseR - (40 - stage);
        let answerG = baseG < 128 ? baseG + (40 - stage) : baseG - (40 - stage);
        let answerB = baseB < 128 ? baseB + (40 - stage) : baseB - (40 - stage);
        return [`rgb(${baseR}, ${baseG}, ${baseB})`, `rgb(${answerR}, ${answerG}, ${answerB})`];
    }, []);

    const blockCount = useMemo(() => Math.round((stage + 0.5) / 2) + 1, [stage]);
    const blockTotalCount = useMemo(() => Math.pow(blockCount, 2), [blockCount]);
    const blockSize = useMemo(() => maxWidth / blockCount - 4, [blockCount]);
    const answer = useMemo(() => Math.floor(Math.random() * blockTotalCount), [stage]);
    const [answerColor, baseColor] = useMemo(() => randomColors(), [stage]);

    return (
        <div style={{ maxWidth: `${maxWidth}px`, display: 'flex', flexWrap: 'wrap' }}>
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
    maxWidth: 360
}

export default Board;