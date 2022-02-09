import React from 'react';

type BaseBlockProps = {
    size: number;
    onClickBase: any;
}

function BaseBlock({ size, onClickBase }: BaseBlockProps) {

    return (
        <div 
        style={{
            width: size, 
            height: size, 
            backgroundColor: 'rgb(136, 34, 224)',
            margin: '2px'
        }}
        onClick={onClickBase}
        >
        </div>
    );
}

BaseBlock.defaultProps = {
    
}

export default BaseBlock;