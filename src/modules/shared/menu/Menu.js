import React from 'react';
import Logo from '../../../assets/images/logo-white.svg';
import { ContainerItem, ContainerMenu, ContainerOptions } from './Style';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <>
            <ContainerMenu>
                
                {/* Logo Meraki */}
                <img src={Logo} title="Meraki" />

                {/*Options*/}
                <ContainerOptions>
                    <ContainerItem><Link to="/">Diário</Link></ContainerItem>
                    <ContainerItem><Link to="/motivacional-videos">Vídeos Motivacionais</Link></ContainerItem>
                    <ContainerItem><Link to="/breathing">Respiração</Link></ContainerItem>
                    <ContainerItem><Link to="/profile">Perfil</Link></ContainerItem>
                </ContainerOptions>
            </ContainerMenu>
        </>
    );
}
