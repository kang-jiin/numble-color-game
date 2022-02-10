import React from 'react';

type AnswerBlockProps = {
    size: number;
    color: string;
    onClickAnswer: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function AnswerBlock({ size, color, onClickAnswer }: AnswerBlockProps) {
    return (
        <div 
        style={{
            width: size, 
            height: size, 
            backgroundColor: color,
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