import styled from "styled-components";
import imgBackground from '../../assets/images/background.svg';

export const ContainerHeader = styled.div`
    position: relative;
    height: 600px;
    margin-top: -70px;
    background-image: url(${imgBackground});
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ContainerHeaderShadow = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    height: calc(100% - 50px);
    width: 100%;
    background-color: rgb(0, 0, 0, 0.8);
`;

export const ItemDatas = styled.div`
    z-index: 1;
    color: var(--white);
    text-align: center;
`;

export const LogoMeraki = styled.div`
    img{
        width: 50px;
    }
`;

export const TitleHeader = styled.div`
        font-size: 30px;
        margin-top: 20px;
        margin-bottom: 30px;
`;

export const SubTitle = styled.p`
    font-size: 17px;
    margin-top: 10px;
`;

export const Button = styled.div`
    width: 150px;
    margin-top: 20px;
`;

export const ContainerServices = styled.div`
    margin: 40px 0;
    text-align: center;
`;

export const Title = styled.p`
    font-size: 30px;
    margin-bottom: 30px;
`;

export const ContainerListItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 170px;
    box-sizing: border-box;
`;

export const Item = styled.div`
    width: 360px;
`;

export const ItemTitle = styled.p`
    margin-top: 15px;
    font-size: 21px;
    color: var(--font);
`;

export const ItemSubTitle = styled.p`
    font-size: 17px;
    margin-top: 10px;
`;

export const ContainerWho = styled.div`
    margin-top: 60px;
    margin-bottom: 40px;
    text-align: center;
`;

export const Description = styled.p`
    margin: 0 auto;
    margin-top: 30px;
    width: 760px;
    font-size: 17px;
`;

export const ContainerFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--black-light);
    color: var(--white);
    padding: 0 70px;
    height: 70px;
`;

export const Contact = styled.p`
    text-align: end;
`;

export const FooterTitle = styled.p`
    margin-bottom: 5px;
`;