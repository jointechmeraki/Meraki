import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../../shared/loading/Loading';
import { NotificationManager } from 'react-notifications';
import VideoCard from '../components/video-card/VideoCard';
import {ContainerPage} from './Style'
import NotFound from '../../shared/not-found/NotFound';
import ImageEmpty from '../../../assets/images/video-empty.svg';

class MotivationalVideos extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            loading: false,
            listCardVideos: [],
            hasError: false,
        };
    }
    
    componentDidMount() 
    {
        this.verifyLogin();
        this.getVideos();
    }

    verifyLogin()
    {
        if (!window.localStorage.getItem("userId"))
        {
            window.location.href = "http://localhost:3000/auth";
        }
    }

    getVideos()
    {
        this.setState({ loading: true });
        this.setState({ hasError: false });
        axios.get(`${process.env.REACT_APP_URL_API}motivationVideos/getByComments`).then(resp => 
        {
            this.setState(() => ({
                listCardVideos: resp.data.map(item => item)
            }));
            console.clear();
            console.log(this.state.listCardVideos);
            this.setState({ loading : false });
        })
        .catch(error => 
        {
            console.log(error);
            this.setState({ loading: false });
            this.setState({ hasError: true });
            NotificationManager.error('Erro ao buscar vídeos');
        });
    }

    buildCards() 
    {
        const response = [];
        this.state.listCardVideos.map(item => {
            response.push(<>
                    <VideoCard 
                        url={item.video.url}
                        title={item.video.description}
                        comments={item.comments}>
                    </VideoCard>
                </>
            );
        });

        return response;
    }

    render()
    {
        return(
            <>
                <ContainerPage>
                    {
                        this.state.loading ? 
                        <Loading marginTop="24px" /> : 
                            (this.state.hasError || this.state.listCardVideos.length <= 0) ? 
                                <NotFound
                                    marginTop="32px"
                                    image={ImageEmpty}
                                    message="Nenhum video foi encontrado..." /> : 
                                this.buildCards()
                    }
                </ContainerPage>
            </>
        );
    }
}

export default MotivationalVideos;
