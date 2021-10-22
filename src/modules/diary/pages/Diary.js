import React, { Component } from 'react';
import Button from '../../shared/button/Button';
import ListDocument from '../components/list-document/ListDocument';
import NewDocument from '../components/new-document/NewDocument';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import { ContainerHeader, ContainerMiniDashboard, ContainerPage } from './Style';
import Loading from '../../shared/loading/Loading';
import CardDashboard from '../components/card-dashboard/CardDashboard';

class Diary extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            openModal: false,
            loadingDashboard: false,
            loadingTodayDiary: false,
            dashboardData: {},
            diaryCurrentData: [],
        };
    }

    componentDidMount() 
    {
        this.verifyLogin();
        this.getDashboard();
        this.getTodayDiary();
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
        this.setState({ loadingDashboard: true });
        const userId = window.localStorage.getItem("userId");
        axios.get(`${process.env.REACT_APP_URL_API}diary/${userId}`).then(resp => 
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

    getTodayDiary()
    {
        this.setState({ loadingTodayDiary: true });
        const userId = window.localStorage.getItem("userId");
        axios.get(`${process.env.REACT_APP_URL_API}diary/getTodayByUserId/${userId}`).then(resp => 
        {
            console.log(resp.data);
            this.setState({ diaryCurrentData: resp.data });
            this.setState({ loadingTodayDiary: false });
        })
        .catch(error => 
        {
            console.log(error);
            this.setState({ loadingTodayDiary: false });
            NotificationManager.error('Erro ao buscar a listagem de diários do dia.');
        });
    }

    closeModal(realoadPage) 
    {
        this.setState({ openModal: false });
        if (realoadPage)
        {
            this.getDashboard();
            this.getTodayDiary();
        }
    }

    render()
    {
        return(
            <>
                <ContainerPage>

                    {/* Header */}
                    <ContainerHeader>
                        <h2>Meu diário</h2>
                        <div onClick={() => {this.setState({ openModal: true })}}>
                            <Button label="Novo documento" />
                        </div>
                    </ContainerHeader>
                    
                    {/* Dashboard */}
                    <ContainerMiniDashboard>
                        {/* Loading */}
                        {
                            this.state.loadingDashboard ? <Loading
                                center 
                                type={'balls'}
                                height={27} 
                                width={27} /> :
                                null
                        }

                        {/* Cards */}
                        {
                            !this.state.loadingDashboard ? 
                                <>
                                    <CardDashboard title="Total de documentos" value={this.state.dashboardData.total || 0}></CardDashboard>
                                    <CardDashboard title="Documentos do mês" value={this.state.dashboardData.totalMonth || 0}></CardDashboard>
                                    <CardDashboard title="Documentos do dia" value={this.state.dashboardData.totalDay || 0}></CardDashboard>
                                </> : 
                            null
                        }
                    </ContainerMiniDashboard>

                    {/* Day list */}
                    <ListDocument 
                        title="Documentos do dia"
                        loading={this.state.loadingTodayDiary}
                        diaryList={this.state.diaryCurrentData}
                        refreshList={() => this.getTodayDiary()} />
                
                    {/*Historic list*/}
                    <ListDocument title="Histórico de documentos" />
                </ContainerPage>

                {/* Modal */}
                {this.state.openModal && <NewDocument closeModal={(event) => this.closeModal(event)} />}
            </>
        );
    }
}

export default Diary;
