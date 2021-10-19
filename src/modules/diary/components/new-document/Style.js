import styled from "styled-components";

export const BackgroundModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #00000090;
    width: 100%;
    height: 100%;
`;

export const ContainerBody = styled.section`
    position: fixed;
    top: 60px;
    left: calc(50% - 250px);
    background-color: white;
    width: 500px;
    border-radius: 7px;
    padding: 40px 30px;
    box-sizing: border-box;
`;

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    p
    {
        font-size: 21px;
    }

    i
    {
        cursor: pointer;
        font-size: 17px;
    }
`;

export const ContainerOptions = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    padding: 0 50px;
    box-sizing: border-box;
`;
