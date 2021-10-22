import React, { Component } from 'react';
import {
    ContainerPage, 
    Title, 
    ContainerHeader, 
    CardsUserCard, 
    AddImage, 
    UserImage, 
    ButtonAdd, 
    UserName, 
    CardsUserDatas, 
    ContainerInput,
    FlexDefault, 
    ContainerButton
} from './Style';
import Button from '../../shared/button/Button';
import ProfileImageDefault from '../../../assets/images/user-default.svg';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';

class Profile extends Component
{
    constructor(props) 
    {
        super(props);
    
        this.state = {
            loading: false,
            name: "",
            email: ""
        };
    }

    componentDidMount() 
    {
        this.verifyLogin();
        this.getUserById();
    }

    verifyLogin()
    {
        if (!window.localStorage.getItem("userId"))
        {
            window.location.href = "http://localhost:3000/auth";
        }
    }

    getUserById()
    {
        this.setState({ loadingDashboard: true });
        const userId = window.localStorage.getItem("userId");
        axios.get(`${process.env.REACT_APP_URL_API}user/${userId}`).then(resp => 
        {
            this.setState({ dashboardData: resp.data });
            this.setState({ loadingDashboard: false });
        })
        .catch(error => 
        {
            console.log(error);
            this.setState({ loadingDashboard: false });
            NotificationManager.error('Erro ao buscar os dados de dashboard.');
        });
    }

    render() {
        return (
            <>
                <ContainerPage>
                    <Title><p>Configurações de usuário</p></Title>
                    <ContainerHeader>
                        <CardsUserCard>
                            <AddImage>
                                <UserImage>
                                    <img src={ProfileImageDefault} />
                                </UserImage>
                                <ButtonAdd>
                                    <i class="fas fa-camera-retro"></i>
                                </ButtonAdd>
                            </AddImage>
                            <UserName>Guilherme</UserName>
                        </CardsUserCard>
                        <CardsUserDatas>
                            <FlexDefault>
                                <ContainerInput>
                                    <p>Nome</p>
                                    <input placeholder="Nome" value="Guilherme Nunes" />
                                </ContainerInput>
                                <ContainerInput>
                                    <p>Email</p>
                                    <input placeholder="Email" value="RM86614@fiap.com.br" />
                                </ContainerInput>
                            </FlexDefault>
                            <ContainerButton>
                                <Button label="Salvar" />
                            </ContainerButton>
                        </CardsUserDatas>
                    </ContainerHeader>
                </ContainerPage>
            </>
        );
    }
}

export default Profile;
