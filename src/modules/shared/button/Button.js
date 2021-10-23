import React from 'react';
import { ButtonStyle } from './Style';

export default function Button(props) 
{
    const style = 
    {
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
        width: props.width || '200px',
    }; 
    return (
        <>
            <ButtonStyle 
                style={style}
                className={props.secondary ? 'secondary' : 's'}>{props.label}
            </ButtonStyle>
        </>
    );
}