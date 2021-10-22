import React, { Component } from 'react';
import Button from '../../../shared/button/Button';
import { BackgroundModal, ContainerBody, ContainerHeader, ContainerOptions } from './Style';
import { NotificationManager } from 'react-notifications';
import Loading from '../../../shared/loading/Loading';
import axios from 'axios';

class NewDocument extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            loading: false,
            title: "",
            message: "",
        };
    }

    insert()
    {
        if (!this.state.title || !this.state.message)
        {
            NotificationManager.error('Preencha os campos e tente novamente.');
            return;
        }

        this.setState({ loading: true });
        const data = {
            user: {
                id: window.localStorage.getItem("userId")
            },
            value: this.state.message,
            name: this.state.title
        }
        axios.post(`${process.env.REACT_APP_URL_API}diary/insert`, data).then(() => 
        {
            this.setState({ loading: false });
            NotificationManager.success('Documento inserido com sucesso.');
            this.props.closeModal(true);
        })
        .catch(error => 
        {
            console.log(error);
            this.setState({ loading: false });
            NotificationManager.error('Erro ao inserir o documento.');
        });
    }

    render() {
        return (
            <>
                <BackgroundModal onClick={() => this.props.closeModal(false)} />
                <ContainerBody>
                    
                    {/* Header */}
                    <ContainerHeader>
                        <p>Novo documento</p>
                        <i className="fas fa-times" onClick={() => this.props.closeModal(false)}></i>
                    </ContainerHeader>
    
                    {/* Title */}
                    <div className="container-input">
                        <p className="label">Título do documento</p>
                        <input 
                            placeholder="Título do documento..."
                            onKeyPress={(event) => event.key == 'Enter' ? this.insert() : null}
                            onChange={event => this.state.title = event.target.value} />
                    </div>
                    
                    {/* Message */}
                    <div className="container-input">
                        <p className="label">Digite o que quiser, agora é seu momento</p>
                        <textarea 
                            placeholder="Eai, escreva aqui como você está no momento..."
                            onKeyPress={(event) => event.key == 'Enter' ? this.insert() : null}
                            onChange={event => this.state.message = event.target.value}>    
                        </textarea>
                    </div>
    
                    {/* Loading */}
                    {this.state.loading ? <Loading marginTop="12px" marginBottom="12px" /> : null}

                    {/* Options */}
                    <ContainerOptions>
                        <Button label="Cancelar" secondary onClick={() => this.props.closeModal(false)} />
                        <Button label="Salvar" onClick={() => this.insert()} />
                    </ContainerOptions>
                </ContainerBody>
            </>
        );
    }
}

export default NewDocument;
