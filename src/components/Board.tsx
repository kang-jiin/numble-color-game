import React, { useEffect, useState } from 'react';
import AnswerBlock from './AnswerBlock';
import BaseBlock from './BaseBlock';

type BoardProps = {
    stage: number;
    onClickAnswer: any;
    onClickBase: any;
}

    const [blockCount, setBlockCount] = useState<number>(Math.round((stage + 0.5) / 2) + 1);
    const [blockTotalCount, setBlockTotalCount] = useState<number>(Math.pow(blockCount, 2));
    const [blockSize, setBlockSize] = useState<number>(360/blockCount -4);
    const [answer, setAnswer] = useState<number>(Math.floor(Math.random()*blockTotalCount));

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