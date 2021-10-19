import styled from "styled-components";

export const ContainerCard = styled.div`
    margin: 0 auto;
    margin-top: 15px;
    width: 600px;
    border: solid 1px var(--border-light);
    background-color: var(--white);
`;

export const ContainerVideo = styled.div`
    width: 100%;
    height: 400px;
`;

export const ContainerHeaderCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
`;

export const TitleCard = styled.p`
    font-size: 14px;
    color: var(--font);
`;

export const AllComents = styled.p`
    cursor: pointer;
    margin-left: 10px;
    color: var(--placeholder);
`;

export const ContainerListComments = styled.p`
    padding-top: 10px;
    padding-bottom: 10px;
    box-sizing: border-box;
`;

export const Comments = styled.p`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 5px;
    color: var(--font-light);
`;

export const Value = styled.p`
    margin-left: 5px;
`;
