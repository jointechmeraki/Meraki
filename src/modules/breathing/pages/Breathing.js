import React, { Component} from 'react';
import { ContainerPage, Title, ContainerCron, ContainerAnimated, CardTime, Separator, Tag, ContainerButton, ControlGif, MessageGif } from './Style'
import ControlGifImage from '../../../assets/images/control.gif';
import Swal from 'sweetalert2';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';

class Breathing extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            minute: 2,
            seconds: 0,
            status: false,
            interval: null
        };
    }

    componentDidMount() 
    {
        this.verifyLogin();
    }

    verifyLogin()
    {
        if (!window.localStorage.getItem("userId"))
        {
            window.location.href = "http://localhost:3000/auth";
        }
    }

    start() 
    {
        if (!this.state.status)
        {
            this.setState({ status: true });
            this.setState({
                interval: setInterval(() => 
                {
                    this.decayingSeconds();
                }, 1000)
            });
        }
    }

    decayingSeconds() 
    {
        if (this.state.seconds == 0 && this.state.minute == 0)
        {
            this.setState({ status: false });
            this.setState({ minute: 2 });
            this.setState({ 
                interval: clearInterval(this.state.interval)
            });
            this.save();
            return;
        }

        if (this.state.seconds == 0)
        {
            this.decayingMinutes();
            this.setState({ seconds: 59 });
            return;
        }

        this.setState({ seconds: this.state.seconds - 1 });
    }

    decayingMinutes() 
    {
        this.setState({ minute: this.state.minute - 1 });
    }

    save() 
    {
        Swal.fire({
            title: 'Está se sentindo melhor?',
            text: "Parabéns por concluir esse período, esperamos ter ajudado. Vamos registrar sua conquista para acompanhar melhor seu desenvolvimento.",
            icon: 'success',
            confirmButtonColor: '#6E72B7',
            confirmButtonText: 'Entendi'
        }).then(() => 
        {
            Swal.showLoading();
            const data = 
            {
                user: {
                    id: window.localStorage.getItem("userId")
                }
            };
            
            axios.post(`${process.env.REACT_APP_URL_API}breathControl/insert`, data).then(() => 
            {
                NotificationManager.success('Sessão registrada com sucesso.');
            })
            .catch(error => 
            {
                console.error(error);
                this.setState({ loadingDashboard: false });
                NotificationManager.error('Erro ao salvar a sessão.');
            });
        });
    }

    render() 
    {
        return(
            <>
                <ContainerPage>
                    <ContainerCron>
                        <CardTime>{this.state.minute}</CardTime>
                        <Separator>
                            <Tag></Tag>
                            <Tag></Tag>
                        </Separator>
                        <CardTime>{this.state.seconds}</CardTime>
                        {
                            this.state.status ? null : <ContainerButton onClick={() => this.start()}>Iniciar</ContainerButton>
                        }
                    </ContainerCron>

                    {
                        this.state.status ? <>
                            <ContainerAnimated>
                                <div id="animated-control"></div>
                                <ControlGif>
                                    <img src={ControlGifImage} />
                                </ControlGif>
                                <MessageGif>Mantenha sua respiração na mesma frequência da bolinha...</MessageGif>
                            </ContainerAnimated>
                        </> : null
                    }
                </ContainerPage>
            </>
        );
    }
}

export default Breathing;