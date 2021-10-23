import React, { Component } from 'react';
import {ContainerCard, ContainerVideo, ContainerHeaderCard, TitleCard, AllComents, ContainerListComments, Comments, Value} from './Style';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import Loading from '../../../shared/loading/Loading';

class VideoCard extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            commentsList: [],
            loadingFav: false
        };
    }

    componentDidMount() 
    {
        this.buildListCards();
    }

    buildListCards()
    {
        if (this.props.comments)
        {
            this.setState({ commentsList: this.props.item.comments.map((comment) => 
                <>
                    <Comments>
                        <p>{comment.comment.user.name}</p>
                        <Value>{comment.comment.comment}</Value>
                    </Comments>
                </>
            )});
        }
    }

    setFav() 
    {
        this.setState({ loadingFav: true });
        const data = 
        {
            user: {
                id: window.localStorage.getItem("userId")
            },
            motivationVideos: {
                id: this.props.item.video.id
            }
        };

        axios.post(`${process.env.REACT_APP_URL_API}favVideos/insert`, data).then(() => 
        {
            NotificationManager.success('O video foi favoritado.');
            this.props.item.hasFav = true;
            this.setState({ loadingFav: false });
        })
        .catch(error => 
        {
            this.setState({ loadingFav: false });
            console.error(error);
            NotificationManager.error('Erro ao favoritar o video.');
        });
    }

    hasFav()
    {
        if (this.props.item.hasFav)
        {
            return { color: 'var(--error)' }; 
        }

        return { color: 'var(--black-light)' }; 
    }

    render()
    {
        return (
            <>
            <ContainerCard>
                    <ContainerVideo>
                        <iframe 
                            src= {this.props.item.video.url} 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </ContainerVideo>
                    <ContainerHeaderCard>
                        <TitleCard>{this.props.item.video.description}</TitleCard>
                        {
                            this.state.loadingFav ? <Loading /> : <i class="pointer fas fa-heart" style={this.hasFav()} onClick={() => this.setFav()}></i>
                        }
                    </ContainerHeaderCard>
                    <AllComents>
                        <ContainerListComments>
                            {this.state.commentsList || null}
                        </ContainerListComments>
                    </AllComents>
            </ContainerCard>
            </>
        );
    }
}

export default VideoCard;
