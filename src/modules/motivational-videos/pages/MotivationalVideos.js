import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../../shared/loading/Loading';
import { NotificationManager } from 'react-notifications';
import VideoCard from '../components/video-card/VideoCard';
import {ContainerPage} from './Style'


class MotivationalVideos extends Component
{

    constructor(props)
    {
        super(props);

        this.state ={
            loading: false,
            listCardVideos: []

        };
        this.getVideos();
    }

    getVideos()
    {
        this.setState({loading: true});
        axios.get(`${process.env.REACT_APP_URL_API}motivationVideos/getByComments`).then(resp => 
            {
                this.buildCardVideo(resp.data)
                this.setState({ loading : false});
            })
            .catch(error => 
            {
                console.log(error);
                this.setState({ loading: false });
                NotificationManager.error('Erro ao buscar vídeos');
            });
    
    }

    buildCardVideo(listVideo)
    {
        if(!this.state.loading){
            for(let i = 0; i < listVideo.length ; i++)
            {
                this.state.listCardVideos.push(
                    <>
                        <VideoCard 
                            url={listVideo[i].video.url}
                            title={listVideo[i].video.description}
                            comments={listVideo[i].comments}>
                        </VideoCard>
                    </>
                )
            }
        }
    }

    render()
    {
        return(
            <>
           <ContainerPage>
                {/* <Loading marginTop="24px" /> */}
               {this.state.loading ? <Loading marginTop="24px" /> : this.state.listCardVideos}
           </ContainerPage>
        </>
        );
    }

}

export default MotivationalVideos;




































{/*export default function MotivationalVideos() 
{
    const comments = [
        {
            userName: "matheus_sb02",
            value: "oi tudo bem?"
        },
        {
            userName: "guilherme0333",
            value: "Oi to bem"
        }

    ]

    return (
        <>
           <ContainerPage>
               <VideoCard
                    url="https://www.youtube.com/embed/d8SMCOywTzU"
                    title="NÃO TEM COMO DAR ERRADO | Melhores Vídeos Motivacionais"
                    Listcomments={comments}>
               </VideoCard>

               <VideoCard
                    url="https://www.youtube.com/embed/ORgDer5ygiU"
                    title="VOCÊ PRECISA ASSISTIR ESSE VIDEO SOZINHO HOJE"  
                    Listcomments={comments}>
               </VideoCard>

               <VideoCard
                   url="https://www.youtube.com/embed/gR8etTe-ST0"
                   title="CLÁUDIO DUARTE - DESCUBRA O SEGREDO DOS VENCEDORES!"
                   Listcomments={comments}>
               </VideoCard>

               <VideoCard
                   url="https://www.youtube.com/embed/2c0y5H0FG6I"
                   title="E SE NÃO ESTIVER TUDO BEM? Vídeo Motivacional"
                   Listcomments={comments}>
               </VideoCard>

               <VideoCard
                   url="https://www.youtube.com/embed/FobXFzSFaIc"
                   title="PARA COM ESSA MENTALIDADE DE LIXO"
                   Listcomments={comments}>
               </VideoCard>

               <VideoCard
                   url="https://www.youtube.com/embed/k5nZMI8qTjs"
                   title="LUTE PELOS SEUS SONHOS"
                   Listcomments={comments}>
               </VideoCard>

               <VideoCard
                   url="https://www.youtube.com/embed/ZbOw5Lcyyi8"
                   title="LEANDRO KARNAL MOTIVAÇÃO 2021 - 8 MINUTOS QUE VÃO MUDAR SUA VIDA!"
                   Listcomments={comments}>
               </VideoCard>

               <VideoCard
                   url="https://www.youtube.com/embed/RlcVZxrse8s"
                   title="5 MINUTOS QUE IRÃO BLINDAR A SUA MENTE"
                   Listcomments={comments}>
               </VideoCard>

               <VideoCard
                   url="https://www.youtube.com/embed/CmyW7BmYqA0"
                   title="DÊ O MÁXIMO DE VOCÊ - Vídeo MOTIVACIONAL"
                   Listcomments={comments}>
               </VideoCard>

               <VideoCard
                   url="https://www.youtube.com/embed/vBnJtRI-_4I"
                   title="SEM PREGUIÇA!"
                   Listcomments={comments}>
               </VideoCard>

           </ContainerPage>
        </>
    );
    
}
*/}
