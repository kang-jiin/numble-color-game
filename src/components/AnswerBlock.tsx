import React from 'react';

type AnswerBlockProps = {
    size: number;
    onClickAnswer: any;
}

function AnswerBlock({ size, onClickAnswer }: AnswerBlockProps) {
    return (
        <div 
        style={{
            width: size, 
            height: size, 
            backgroundColor: 'rgb(0, 0, 0)',
            margin: '2px'
        }}
        onClick={onClickAnswer}
        >
        </div>
    );
}

AnswerBlock.defaultProps = {
    
}

export default AnswerBlock;