import { React, Component} from 'react';
import {ContainerPage, Title, ContainerCron, ContainerAnimated, CardTime, Separator, Tag, ContainerButton, ControlGif, MessageGif, Hide} from './Style'
import ControlGifImage from '../../../assets/images/control.gif';

export class Breathing extends Component
{
    constructor(props, context)
    {
        super(props, context);
    }
    
    static render() 
    {
        return(
            <>
                <ContainerPage>
                    <Title>Selecione o tempo desejado</Title>
                    <ContainerCron>
                        <CardTime>00</CardTime>
                        <Separator>
                            <Tag></Tag>
                            <Tag></Tag>
                        </Separator>
                        <CardTime>00</CardTime>
                        <Separator>
                            <Tag></Tag>
                            <Tag></Tag>
                        </Separator>
                        <CardTime>00</CardTime>
                        <ContainerButton>
                            <div id="start-button">Iniciar</div>
                        </ContainerButton>
                    </ContainerCron>
                    <ContainerAnimated>
                        <div id="animated-control"></div>
                        <ControlGif>
                            <img src={ControlGifImage} />
                        </ControlGif>
                        <MessageGif>Mantenha sua respiração na mesma frequência da bolinha...</MessageGif>
                    </ContainerAnimated>
                </ContainerPage>
            </>
        );
    }
}
