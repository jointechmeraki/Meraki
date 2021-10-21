import React, { Component } from 'react';
import Button from '../../shared/button/Button';
import CardDashboard from '../components/card-dashboard/CardDashboard';
import ListDocument from '../components/list-document/ListDocument';
import NewDocument from '../components/new-document/NewDocument';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import { ContainerHeader, ContainerMiniDashboard, ContainerPage } from './Style';

class Diary extends Component
{
    constructor(props) 
    {
        super(props);
        
        this.state = {
            openModal: false,
            loadingDashboard: false
        };

        this.verifyLogin();
        this.getDashboard();
    }

    getInitialState()
    {
        alert('das')
    }

    verifyLogin()
    {
        if (!window.localStorage.getItem("userId"))
        {
            window.location.href = "http://localhost:3000/auth";
        }
    }

    getDashboard()
    {
        if (!this.state.loadingDashboard)
        {
            this.setState({loadingDashboard: true});
            axios.get(`${process.env.REACT_APP_URL_API}diary/1`).then(resp => 
            {
                console.log(resp);
            })
            .catch(error => 
            {
                console.log(error);
                this.setState({ loading: false });
                NotificationManager.error('Erro ao buscar os dados de dashboard.');
            });
        }
    }

    fadeOpenModal() {
        this.setState({ openModal: !this.state.openModal });
    }

    render() {
        return (
            <>
                <ContainerPage>
                    
                    {/* Header */}
                    <ContainerHeader>
                        <h2>Meu diário</h2>
                        <div onClick={() => {this.fadeOpenModal()}}>
                            <Button label="Novo documento" />
                        </div>
                    </ContainerHeader>
    
                    {/* Dashboard */}
                    <ContainerMiniDashboard>
                        <CardDashboard title="Total de documentos" value="1.303"></CardDashboard>
                        <CardDashboard title="Documentos do mês" value="36"></CardDashboard>
                        <CardDashboard title="Documentos do dia" value="2"></CardDashboard>
                    </ContainerMiniDashboard>
                
                    {/* Day list */}
                    <ListDocument title="Documentos do dia" />
                    
                    {/*Historic list*/}
                    <ListDocument title="Histórico de documentos" />
                </ContainerPage>
    
                {/* Modal */}
                {this.openModal && <NewDocument closeModal={this.fadeOpenModal} />}
            </>
        );
    }
}

export default Diary;
