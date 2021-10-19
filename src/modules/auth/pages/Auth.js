import { React, Component } from 'react';
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
          loading: false
        };
    }

    insertOrLogin() 
    {
        this.setState({ loading: true });
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
                        <input placeholder="Digite seu e-mail..." />                      
                        
                        {/* Senha */}
                        <p className="label">Senha</p>
                        <input placeholder="Digite sua senha..." />
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
