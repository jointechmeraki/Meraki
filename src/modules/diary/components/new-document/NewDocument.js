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

    componentDidMount()
    {
        if (this.props.diary)
        {
            this.setState({ title: this.props.diary.name });
            this.setState({ message: this.props.diary.value });
        }
    }

    save()
    {
        if (this.props.diary)
        {
            this.update();
            return;
        }

        this.insert();
    }

    update()
    {
        this.setState({ loading: true });
        const data = this.prepareData();
        axios.put(`${process.env.REACT_APP_URL_API}diary/update`, data).then(() => 
        {
            this.setState({ loading: false });
            NotificationManager.success('Documento editado com sucesso.');
            this.props.closeModal(true);
        })
        .catch(error => 
        {
            console.error(error);
            this.setState({ loading: false });
            NotificationManager.error('Erro ao inserir o documento.');
        });
    }

    insert()
    {
        
        this.setState({ loading: true });
        const data = this.prepareData();
        axios.post(`${process.env.REACT_APP_URL_API}diary/insert`, data).then(() => 
        {
            this.setState({ loading: false });
            NotificationManager.success('Documento inserido com sucesso.');
            this.props.closeModal(true);
        })
        .catch(error => 
        {
            console.error(error);
            this.setState({ loading: false });
            NotificationManager.error('Erro ao inserir o documento.');
        });
    }

    prepareData()
    {
        if (!this.state.title || !this.state.message)
        {
            NotificationManager.error('Preencha os campos e tente novamente.');
            return;
        }

        const data = {
            user: {
                id: window.localStorage.getItem("userId")
            },
            value: this.state.message,
            name: this.state.title
        }

        if (this.props.diary)
        {
            data.id = this.props.diary.id;
        }
        
        return data;
    }

    render() 
    {
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
                            value={this.state.title}
                            onChange={event => this.setState({ title: event.target.value })}
                            onKeyPress={(event) => event.key == 'Enter' ? this.save() : null} />
                    </div>
                    
                    {/* Message */}
                    <div className="container-input">
                        <p className="label">Digite o que quiser, agora é seu momento</p>
                        <textarea 
                            placeholder="Eai, escreva aqui como você está no momento..."
                            value={this.state.message}
                            onChange={event => this.setState({ message: event.target.value })}
                            onKeyPress={(event) => event.key == 'Enter' ? this.save() : null}>
                        </textarea>
                    </div>
    
                    {/* Loading */}
                    { this.state.loading ? <Loading marginTop="12px" marginBottom="12px" /> : null }

                    {/* Options */}
                    <ContainerOptions>
                        <Button label="Cancelar" secondary onClick={() => this.props.closeModal(false)} />
                        <Button label="Salvar" onClick={() => this.save()} />
                    </ContainerOptions>
                </ContainerBody>
            </>
        );
    }
}

export default NewDocument;
