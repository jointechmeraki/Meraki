import React from 'react';
import Logo from '../../../assets/images/logo-white.svg';
import { ContainerItem, ContainerMenu, ContainerOptions } from './Style';
import { Link } from 'react-router-dom';

function isHome()
{
  const url = window.location.href;
  if (url.includes('/')) return true;

  return false;
}

function isAuth()
{
  const url = window.location.href;
  if (url.includes('/auth')) return true;

  return false;
}

function getOptions()
{
    if (isHome() || isAuth())
    {
        return <>
            <ContainerOptions>
                <ContainerItem><Link to="/auth">Login</Link></ContainerItem>
                <ContainerItem><Link to="/auth">Fazer parte</Link></ContainerItem>
            </ContainerOptions>
        </>
    }

    return <>
        <ContainerOptions>
            <ContainerItem><Link to="/diary">Diário</Link></ContainerItem>
            <ContainerItem><Link to="/motivacional-videos">Vídeos Motivacionais</Link></ContainerItem>
            <ContainerItem><Link to="/breathing">Respiração</Link></ContainerItem>
            <ContainerItem><Link to="/profile">Perfil</Link></ContainerItem>
        </ContainerOptions>
    </>
}

export default function Menu() {
    return (
        <>
            <ContainerMenu>
                
                {/* Logo Meraki */}
                <img src={Logo} title="Meraki" />

                {/*Options*/}
                {getOptions()}
            </ContainerMenu>
        </>
    );
}
