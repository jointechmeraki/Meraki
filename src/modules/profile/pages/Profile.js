import {
    ContainerPage, 
    Title, 
    ContainerHeader, 
    CardsUserCard, 
    AddImage, 
    UserImage, 
    ButtonAdd, 
    UserName, 
    CardsUserDatas, 
    ContainerInput,
    FlexDefault, 
    ContainerButton
} from './Style';
import Button from '../../shared/button/Button';
import ProfileImageDefault from '../../../assets/images/user-default.svg';

export default function Profile() 
{
    return (
        <>
            <ContainerPage>
                <Title><p>Configurações de usuário</p></Title>
                <ContainerHeader>
                    <CardsUserCard>
                        <AddImage>
                            <UserImage>
                                <img src={ProfileImageDefault} />
                            </UserImage>
                            <ButtonAdd>
                                <i class="fas fa-camera-retro"></i>
                            </ButtonAdd>
                        </AddImage>
                        <UserName>Guilherme</UserName>
                    </CardsUserCard>
                    <CardsUserDatas>
                        <FlexDefault>
                            <ContainerInput>
                                <p>Nome</p>
                                <input placeholder="Nome" value="Guilherme Nunes" />
                            </ContainerInput>
                            <ContainerInput>
                                <p>Email</p>
                                <input placeholder="Email" value="RM86614@fiap.com.br" />
                            </ContainerInput>
                        </FlexDefault>
                        <ContainerButton>
                            <Button label="Salvar" />
                        </ContainerButton>
                    </CardsUserDatas>
                </ContainerHeader>
            </ContainerPage>
        </>
    );
}