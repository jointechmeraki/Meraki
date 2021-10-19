import React from 'react';
import { ButtonStyle } from './Style';

export default function Button(props) {
    const { onClick } = props;
    return (
        <>
            <ButtonStyle 
                onClick={onClick}
                className={props.secondary ? 'secondary' : 's'}>{props.label}
            </ButtonStyle>
        </>
    );
}