import React from 'react';
import { ContainerItem, ContainerOptions, HeaderItem, TitleItem, ValueItem } from './Style';

export default function DocumentItem(props) 
{
    return (
        <>
            <ContainerItem>

                {/*Header*/}
                <HeaderItem>
                    <TitleItem>{props.title}</TitleItem>

                    {/*Options*/}
                    <ContainerOptions>
                        <i className="edit fas fa-edit"></i>
                        <i className="remove fas fa-trash-alt"></i>
                    </ContainerOptions>
                </HeaderItem>

                {/* Value */}
                <ValueItem>{props.message}</ValueItem>
            </ContainerItem>
        </>
    );
}