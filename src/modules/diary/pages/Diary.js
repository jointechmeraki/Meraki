import { React, useState } from 'react';
import Button from '../../shared/button/Button';
import CardDashboard from '../components/card-dashboard/CardDashboard';
import ListDocument from '../components/list-document/ListDocument';
import NewDocument from '../components/new-document/NewDocument';
import { ContainerHeader, ContainerMiniDashboard, ContainerPage } from './Style';

export default function Diary() 
{
    const [ openModal, setOpenModal ] = useState(false);

    return (
        <>
            <ContainerPage>
                
                {/* Header */}
                <ContainerHeader>
                    <h2>Meu diário</h2>
                    <div onClick={() => {setOpenModal(true)}}>
                        <Button label="Novo documento" />
                    </div>
                </ContainerHeader>

                {/* Dashboard */}
                <ContainerMiniDashboard>
                    <CardDashboard title="Total de documentos" value="1.303"></CardDashboard>
                    <CardDashboard title="Documentos do mês" value="36"></CardDashboard>
                    <CardDashboard title="Documentos do dia" value="2"></CardDashboard>
                </ContainerMiniDashboard>
            
                {/*Day list*/}
                <ListDocument title="Documentos do dia" />
                
                {/*Historic list*/}
                <ListDocument title="Histórico de documentos" />
            </ContainerPage>

            {/* Modal */}
            {openModal && <NewDocument closeModal={setOpenModal} />}
        </>
    );
}
