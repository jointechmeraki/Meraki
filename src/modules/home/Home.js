import React from 'react';
import {
    ContainerHeader, 
    ContainerHeaderShadow, 
    ItemDatas, 
    LogoMeraki, 
    TitleHeader, 
    SubTitle, 
    Button, 
    ContainerServices, 
    Title, 
    ContainerListItems, 
    Item, 
    ItemTitle, 
    ItemSubTitle, 
    ContainerWho, 
    Description, 
    ContainerFooter, 
    FooterTitle, 
    Contact, 
} from './Style';
import imgLogo from '../../assets/images/tree-white.svg';
import imgDiary from '../../assets/images/diary-service.svg';
import imgVideo from '../../assets/images/video-service.svg';
import imgBreathing from '../../assets/images/control-service.svg';

export default function Home() {

    /*window.onscroll = () => {
        const menu = document.getElementById("menu");
        if (document.documentElement.scrollTop > 50) {
            menu.classList.add('menu-all-show');
        }
        else {
            menu.classList.remove('menu-all-show');
        }
    }

    window.onresize = () => {
        if (document.documentElement.offsetWidth <= 800) {
            document.getElementById('menu-options').classList.add('hide');
        }
        else {
            document.getElementById('menu-options').classList.remove('hide');
        }
    }*/

    return (
        <>
            <ContainerHeader>
                <ContainerHeaderShadow></ContainerHeaderShadow>
                <ItemDatas>

                    <LogoMeraki>
                        <img src={imgLogo} />
                    </LogoMeraki>

                    <TitleHeader>
                        <p>Vem desabafar aqui, fica tranquilo</p>
                    </TitleHeader>
                    <SubTitle>
                        <p>Crie o seu diário, tenha um histórico do andamento do seu quadro e compartilhe tudo isso com seu terapeuta.</p>
                    </SubTitle>
                    <Button onClick="window.location.href='./plataform/plataform.html'">Começar</Button>
                </ItemDatas>
            </ContainerHeader>

            <ContainerServices>
                <Title><p>Nossos serviços</p></Title>
                <ContainerListItems>
                    <Item>
                        <img src={imgDiary} />
                        <ItemTitle>
                            <p>Diário</p>
                        </ItemTitle>
                        <ItemSubTitle>
                            <p>Crie e mantenha um histórico de tudo que acontece com você! Você pode até mesmo compartilhar tudo com seu terapeuta. Tudo isso de graça e muito simples de usar.</p>
                        </ItemSubTitle>
                    </Item>
                    <Item>
                        <img src={imgVideo} />
                        <ItemTitle>
                            <p>Videos motivacionais</p>
                        </ItemTitle>
                        <ItemSubTitle>
                            <p>Assista os melhores vídeos motivacionais para você sair de uma crise ou para se inspirar em um dia ou semana difícil.</p>
                        </ItemSubTitle>
                    </Item>
                    <Item>
                        <img src={imgBreathing} />
                        <ItemTitle>
                            <p>Controle de respiração</p>
                        </ItemTitle>
                        <ItemSubTitle>
                            <p>Para sair de uma crise, venha rapidamente acessar nosso controle de respiração. Imite sua respiração com nossa imagem auxiliar e passe por esse fase difícil.</p>
                        </ItemSubTitle>
                    </Item>
                </ContainerListItems>
            </ContainerServices>

            <ContainerWho>
                <Title>Quem somos?</Title>
                <Description>
                    <p>
                        Assim mesmo, a mobilidade dos capitais internacionais talvez venha a ressaltar a relatividade do retorno esperado a longo prazo. Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se o novo modelo estrutural aqui preconizado agrega valor ao estabelecimento dos relacionamentos verticais entre as hierarquias. Ainda assim, existem dúvidas a respeito de como o fenômeno da Internet garante a contribuição de um grupo importante na determinação de todos os recursos funcionais envolvidos.
                    </p>
                </Description>
            </ContainerWho>

            <ContainerFooter>
                <div>
                    <FooterTitle><p>Meraki</p></FooterTitle>
                    <p>Todos os direitos reservados © 2021 - 2021</p>
                </div>
                <Contact>
                    <FooterTitle><p>Entre em contato com nosso email</p></FooterTitle>
                    <p>contato@meraki.com.br</p>
                </Contact>
            </ContainerFooter>




        </>
    )
}