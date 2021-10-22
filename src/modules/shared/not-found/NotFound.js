import React from 'react';
import ImageEmpty from '../../../assets/images/data-empty.svg';
import { ContainerNotFound } from './Style';

export default function NotFound(props) 
{
    const myStyle = 
    {
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
        marginLeft: props.marginLeft,
        marginRight: props.marginRight,
    }; 
    
    const styleIcon = 
    {
        width: props.width || '100px',
    }; 

    return (
        <>
            <ContainerNotFound style={myStyle}>
                <img style={styleIcon} src={props.image || ImageEmpty} />
                <p>{props.message || 'Nenhuma informação encontrada.'}</p>
            </ContainerNotFound>
        </>
    );
}