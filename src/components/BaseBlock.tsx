import React from 'react';

type BaseBlockProps = {
    size: number;
    color: string;
    onClickBase: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

function BaseBlock({ size, color, onClickBase }: BaseBlockProps) {
    return (
        <div
            style={{
                width: size,
                height: size,
                backgroundColor: color,
                margin: '2px'
            }}
            onClick={onClickBase}
        >
        </div>
    );
}

export default BaseBlock;