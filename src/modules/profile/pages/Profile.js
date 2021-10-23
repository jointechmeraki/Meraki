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
import Loading from '../../shared/loading/Loading';

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

    save()
    {
        const id = window.localStorage.getItem("userId");
        const data = { email: this.state.email, name: this.state.name, id: id};
        this.setState({ loading: true });
        axios.put(`${process.env.REACT_APP_URL_API}user/update`, data).then(resp => 
        {
            this.setState({ loading: false });
            this.setState({ email: resp.data.email });
            this.setState({ name: resp.data.name });

            NotificationManager.success('Alteração feita com sucesso.');
        })
        .catch(error => 
        {
            console.error(error);
            this.setState({ loading: false });
            NotificationManager.error('Falha na alteração.');
        });
    }

    getUserById()
    {
        this.setState({ loading: true });
        const userId = window.localStorage.getItem("userId");
        axios.get(`${process.env.REACT_APP_URL_API}user/${userId}`).then(resp => 
        {
            this.setState({ name: resp.data.name });
            this.setState({ email: resp.data.email });
            this.setState({ loading: false });
        })
        .catch(error => 
        {
            console.error(error);
            this.setState({ loading: false });
            NotificationManager.error('Erro ao buscar o usuário.');
        });
    }

    render() 
    {
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
                            <UserName>{this.state.name}</UserName>
                        </CardsUserCard>
                        <CardsUserDatas>
                            <FlexDefault>
                                <ContainerInput>
                                    <p>Nome</p>
                                    <input 
                                        placeholder="Nome" 
                                        value={this.state.name} 
                                        onKeyPress={(event) => event.key == 'Enter' ? this.save() : null}
                                        onChange={event => this.setState({name: event.target.value})} />
                                        
                                </ContainerInput>
                                <ContainerInput>
                                    <p>Email</p>
                                    <input 
                                        placeholder="Email"
                                        value={this.state.email} 
                                        onKeyPress={(event) => event.key == 'Enter' ? this.save() : null}
                                        onChange={event => this.setState({email: event.target.value})} />
                                </ContainerInput>
                            </FlexDefault>
                            { this.state.loading ? <Loading marginTop="24px" /> : null }
                            <ContainerButton>
                                <Button label="Salvar" onClick={() => this.save()}/>
                            </ContainerButton>
                        </CardsUserDatas>
                    </ContainerHeader>
                </ContainerPage>
            </>
        );
    }
}

export default Profile;
