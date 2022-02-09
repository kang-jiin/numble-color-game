import React from 'react';

type BaseBlockProps = {
    size: number;
}

function BaseBlock({ size }: BaseBlockProps) {

    return (
        <div 
        style={{
            width: size, 
            height: size, 
            backgroundColor: 'rgb(136, 34, 224)',
            margin: '2px'
        }}
        >
        </div>
    );
}

BaseBlock.defaultProps = {
    
}

export default BaseBlock;