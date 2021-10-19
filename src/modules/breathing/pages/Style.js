import styled from "styled-components";

export const ContainerPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 30px 0;
    padding: 0 250px;
    box-sizing: border-box;
`;

export const Title = styled.p`
        font-size: 21px;
`;

export const ContainerCron = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 450px;
    height: 200px;
    background-color: var(--white);
    box-shadow: var(--shadow);
`;

export const CardTime = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: var(--primary);
    box-shadow: var(--shadow);
    border-radius: 3px;
    color: var(--white);
    font-size: 45px;
`;


export const Separator = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin: 0 15px;
    height: 100px;
`;

export const Tag = styled.div`
    width: 10px;
    height: 10px;
    background-color: var(--font-light);
`;

export const ContainerButton = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: calc(50% - 100px);
    bottom: -25px;
    width: 200px;
    height: 50px;
    color: var(--white);
    background-color: var(--primary-hover);
    font-size: 17px;
    border-radius: 3px;
    box-shadow: 0 3px 6px #36125080;
    cursor: pointer;
`;

export const ControlGif = styled.div`
    width: 240px;
    margin-top: 40px;

    img 
    {
        width: 100%;
        height: 100%;
    }
`;

export const MessageGif = styled.p`
    font-size: 21px;
    width: 400px;
    text-align: center;
`;
