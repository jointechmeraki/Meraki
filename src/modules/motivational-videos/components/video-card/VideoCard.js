import React, { useState } from 'react';
import {ContainerCard, ContainerVideo, ContainerHeaderCard, TitleCard, AllComents, ContainerListComments, Comments, Value} from './Style'


export default function VideoCard(props) 
{

    const commentsList = props.Listcomments.map((comment) => 
        <>
            <Comments>
                <p>{comment.userName}</p>
                <Value>{comment.value}</Value>
            </Comments>
        </>
    );

    return (
        <>
           <ContainerCard>
                <ContainerVideo>
                    <iframe 
                        src= {props.url} 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </ContainerVideo>
                <ContainerHeaderCard>
                    <TitleCard>{props.title}</TitleCard>
                    <i class="pointer far fa-star"></i>
                </ContainerHeaderCard>
                <AllComents>
                    <ContainerListComments>
                        {commentsList}
                    </ContainerListComments>
                </AllComents>
           </ContainerCard>
        </>
    );
}
