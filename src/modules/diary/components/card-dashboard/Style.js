import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 80px;
    width: 250px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 3px;
    color: var(--white);
    background-color: var(--primary);
    margin-top: 15px;
`;

export const Value = styled.p`
    margin-top: 3px;
    font-size: 17px;
`;
