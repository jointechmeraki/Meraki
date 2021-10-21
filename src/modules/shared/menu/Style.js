import styled from "styled-components";

export const ContainerMenu = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: calc(100% - 220px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 110px;
    height: 50px;
    background-color: rgb(0, 0, 0, 0.85);
    color: var(--white);
    box-shadow: var(--shadow);
`;

export const ContainerOptions = styled.div`
    display: flex;
    justify-content: center;
`;

export const ContainerItem = styled.div`
    position: relative;
    height: 50px;
    padding-top: 20px;
    box-sizing: border-box;
    cursor: pointer;
    margin-right: 50px;
    transition: var(--transition);
    text-decoration: none;
    
    a{
        color: var(--white);
        text-decoration: none;
    }

    &:last-child
    {
        margin-right: 0;
    }
`;