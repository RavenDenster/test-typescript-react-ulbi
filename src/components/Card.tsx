import React, { FC, useState } from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactChild | React.ReactNode;
    variant: CardVariant;
    onClick: (num: number) => void // void это то, что возвращает функция
}

const Card: FC<CardProps> = ({ width, height, variant, onClick, children }) => { // FC<CardProps> 

    const [state, setState] = useState(0)

    return (
        <div style={{
            width, height,
            border: variant === CardVariant.outlined ? '5px solid grey' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
            }} onClick={() => onClick(state)}>  
            {/* эта анонимная функция есть и в addEv и она нужна если есть параметр у функции */}
            {children}
        </div>
    )
}

export default Card;
