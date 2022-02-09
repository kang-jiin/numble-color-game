import React from 'react';

type HeaderProps = {
    stage: number;
    time: number;
    score: number;
}

function Header({ stage, time, score }: HeaderProps) {
    return (
        <div>
            스테이지 : {stage}, 남은시간 : {time}, 점수 : {score}
        </div>
    );
}

Header.defaultProps = {
    
}

export default Header;