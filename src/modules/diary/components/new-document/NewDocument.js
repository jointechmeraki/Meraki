import React from 'react';
import Button from '../../../shared/button/Button';
import { BackgroundModal, ContainerBody, ContainerHeader, ContainerOptions } from './Style';

export default function NewDocument({ closeModal }) 
{
    return (
        <>
            <BackgroundModal onClick={() => closeModal(false)} />
            <ContainerBody>
                
                {/* Header */}
                <ContainerHeader>
                    <p>Novo documento</p>
                    <i className="fas fa-times" onClick={() => closeModal(false)}></i>
                </ContainerHeader>

                {/* Title */}
                <div className="container-input">
                    <p className="label">Título do documento</p>
                    <input placeholder="Título do documento..."></input>
                </div>
                
                {/* Message */}
                <div className="container-input">
                    <p className="label">Digite o que quiser, agora é seu momento</p>
                    <textarea placeholder="Eai, escreva aqui como você está no momento..."></textarea>
                </div>

                {/* Options */}
                <ContainerOptions>
                    <div onClick={() => closeModal(false)}>
                        <Button label="Cancelar" secondary />
                    </div>
                    <Button label="Salvar" />
                </ContainerOptions>
            </ContainerBody>
        </>
    );
}