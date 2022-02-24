import React, { useCallback } from 'react';

import './style.css';

type TProps = {
    text: string;
    num: number;
    onClick: (num: number) => void
};

const TimerButton = (props: TProps) => {
    const {
        text,
        num,
        onClick,
    } = props;

    const onClickCallback = useCallback(() => {
        onClick(num);
    }, [
        num,
        onClick,
    ]);

    return (
        <button className="TimerButton" onClick={onClickCallback}>{text}</button>
    );
}

export default TimerButton;
