import React, { Component } from 'react';
import { ContainerItem, ContainerOptions, HeaderItem, TitleItem, ValueItem } from './Style';
import { NotificationManager } from 'react-notifications';
import axios from 'axios';
import NewDocument from '../new-document/NewDocument';
import Swal from 'sweetalert2';

class DocumentItem extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            openModal: false
        };
    }

    removeItem()
    {
        Swal.fire({
            title: 'Removendo um diário',
            text: "Você tem certeza que deseja remover esse documento?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#6E72B7',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirmar'
        }).then((result) => 
        {
            if (result.isConfirmed)
            {
                Swal.showLoading();
                axios.delete(`${process.env.REACT_APP_URL_API}diary/${this.props.diary.id}`).then(() => 
                {
                    if (result.isConfirmed) 
                    {
                        Swal.fire(
                        'Removido!',
                        'Seu documento foi removido com sucesso',
                        'success'
                        );
                    }
                    this.props.refreshList();
                })
                .catch(error => 
                {
                    console.error(error);
                    this.setState({ loadingDashboard: false });
                    NotificationManager.error('Erro ao remover o diário.');
                });
            }
        });
    }

    render() 
    {
        return (
            <>
                <ContainerItem>
    
                    {/*Header*/}
                    <HeaderItem>
                        <TitleItem>{this.props.diary.name}</TitleItem>
    
                        {/*Options*/}
                        <ContainerOptions>
                            <i className="edit fas fa-edit" onClick={() => this.setState({ openModal: true })}></i>
                            <i className="remove fas fa-trash-alt" onClick={() => this.removeItem() }></i>
                        </ContainerOptions>
                    </HeaderItem>
    
                    {/* Value */}
                    <ValueItem>{this.props.diary.value}</ValueItem>
                </ContainerItem>

                {/* Modal */}
                {this.state.openModal && <NewDocument diary={this.props.diary} closeModal={() => this.props.refreshList()} />}
            </>
        );
    }
}

export default DocumentItem;
