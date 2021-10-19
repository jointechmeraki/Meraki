import React from 'react';
import { ContainerCard, Value } from './Style';

export default function CardDashboard(props) 
{
    return (
        <>
            <ContainerCard>
                <h4>{props.title}</h4>
                <Value>{props.value}</Value>
            </ContainerCard>
        </>
    );
}