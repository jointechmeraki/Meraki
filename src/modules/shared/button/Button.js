import React from 'react';
import { ButtonStyle } from './Style';

export default function Button(props) {
    return (
        <>
            <ButtonStyle 
                className={props.secondary ? 'secondary' : 's'}>{props.label}
            </ButtonStyle>
        </>
    );
}