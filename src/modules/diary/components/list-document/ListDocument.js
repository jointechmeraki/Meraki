import React from 'react';
import DocumentItem from '../document-item/DocumentItem';
import { ContainerListItems, Title } from './Style';
import NotFound from '../../../shared/not-found/NotFound';
import Loading from '../../../shared/loading/Loading';

export default function ListDocument(props) 
{
    let diaryList = [];
    if (props.diaryList)
    {
        diaryList = props.diaryList.map((diary) => 
            <>
                <DocumentItem 
                    diary={diary}
                    refreshList={() => props.refreshList()}>
                </DocumentItem>
            </>
        );
    }

    return (
        <>
            <ContainerListItems>
                
                {/*Title*/}
                <Title>{props.title}</Title>

                {/*Item list*/}
                {
                    props.loading ? 
                        <Loading marginTop="24px" /> : 
                            diaryList.length <= 0 ? 
                                <NotFound width="70px" message="nenhuma diário encontrado..." /> : 
                                    diaryList
                }
            </ContainerListItems>
        </>
    );
}