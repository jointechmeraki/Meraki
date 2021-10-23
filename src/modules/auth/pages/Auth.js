import React, { Component } from 'react';
import axios from 'axios';
import Button from '../../shared/button/Button';
import Loading from '../../shared/loading/Loading';
import { 
    ContainerPage, 
    ContainerAuth,
    Title,
    ContainerForm,
    ContainerOptions,
    ForgotPassword,
} from './Style';
import { NotificationManager } from 'react-notifications';

class Auth extends Component 
{
    constructor(props) 
    {
        super(props);
    
        this.state = {
            loading: false,
            email: "",
            password: ""
        };
    }

    insertOrLogin() 
    {
        if (!this.state.email || !this.state.password)
        {
            NotificationManager.error('Preencha os campos e tente novamente.');
            return;
        }

        this.setState({ loading: true });
        const data = { email: this.state.email, password: this.state.password };
        axios.post(`${process.env.REACT_APP_URL_API}user/login`, data).then(resp => 
        {
            this.setState({ loading: false });
            window.localStorage.setItem("userId", resp.data.id);

            // Navigate to home
            window.location.href = "http://localhost:3000/diary"
        })
        .catch(error => 
        {
            console.error(error);
            this.setState({ loading: false });
            NotificationManager.error('Login inválido.');
        });
    }

    render() 
    {
        return <>
            <ContainerPage>
            
                {/* Container auth */}
                <ContainerAuth>
                    
                    <Title>Seja bem-vindo(a)</Title>
                    <p>Aqui você é super bem-vindo! Estamos aqui para te ajudar, então fique a vontade e qualquer coisa é só nós chamar...</p>
                    
                    {/* Form */}
                    <ContainerForm>
                        
                        {/* Email */}
                        <p className="label">E-mail</p>
                        <input 
                            placeholder="Digite seu e-mail..." 
                            onKeyPress={(event) => event.key == 'Enter' ? this.insertOrLogin() : null}
                            onChange={event => this.setState({ email: event.target.value })} />
                        
                        {/* Senha */}
                        <p className="label">Senha</p>
                        <input 
                            type="password"
                            placeholder="Digite sua senha..." 
                            onKeyPress={(event) => event.key == 'Enter' ? this.insertOrLogin() : null}
                            onChange={event => this.setState({ password: event.target.value })} />
                    </ContainerForm>                  
                    
                    {/* Forgot password */}
                    <ForgotPassword>Esqueceu sua senha?</ForgotPassword>
                    
                    {/* Options */}
                    <ContainerOptions>
                        <Button 
                            secondary
                            label="Cancelar" />
                        <Button 
                            label="Continuar"
                            onClick={() => this.insertOrLogin()} />
                    </ContainerOptions>
                    
                    {/* Loading */}
                    {this.state.loading ? <Loading marginTop="24px" /> : null}
                </ContainerAuth>
            </ContainerPage>
        </>;
    }
}

export default Auth;
