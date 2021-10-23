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
            hasSetFavVideo: false,
            listFavVid: []
        };
    }
    
    componentDidMount() 
    {
        this.verifyLogin();
        this.getVideos();
        this.getFavVideos();
    }

    verifyLogin()
    {
        if (!window.localStorage.getItem("userId"))
        {
            window.location.href = "http://localhost:3000/auth";
        }
    }

    getFavVideos()
    {
        const userId = window.localStorage.getItem("userId");
        axios.get(`${process.env.REACT_APP_URL_API}favVideos/${userId}`).then(resp => 
        {
            this.setState({ listFavVid: resp.data });
            this.setFavVideo();
        })
        .catch(error => 
        {
            console.error(error);
        });
    }

    setFavVideo()
    {
        if (!this.state.hasSetFavVideo && this.state.listCardVideos.length > 0)
        {
            for (const item of this.state.listCardVideos)
            {
                const exist = this.state.listFavVid.find(x => x.motivationVideos.id == item.video.id);
                if (exist)
                {
                    item.hasFav = true;
                }
            }

            this.setState({ hasSetFavVideo: true });
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
            this.setState({ loading : false });
            this.setFavVideo();
        })
        .catch(error => 
        {
            console.error(error);
            this.setState({ loading: false });
            this.setState({ hasError: true });
            NotificationManager.error('Erro ao buscar vídeos');
        });
    }

    buildCards() 
    {
        const response = [];
        this.state.listCardVideos.map(item => {
            response.push(<VideoCard item={item}></VideoCard>);
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
