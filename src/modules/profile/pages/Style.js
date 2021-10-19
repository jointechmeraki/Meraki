import styled from "styled-components";

export const ContainerPage = styled.div`
    margin: 30px 0;
    padding: 0 250px;
    box-sizing: border-box;
`;

export const Title = styled.p`
    font-size: 21px;
`;

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
`;

export const CardsUserCard = styled.div`
    background-color: var(--white);
    box-shadow: var(--shadow);
    border-radius: 3px;
    padding: 15px 25px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-shrink: 0;
    width: 200px;
    height: 187px;
    margin-right: 15px;
`;

export const AddImage = styled.div`
    position: relative;
`;

export const UserImage = styled.div`
    img {
        width: 100px;
        height: 100px;
        cursor: pointer;
    }
`;

export const ButtonAdd = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    color: var(--white);
    width: 30px;
    height: 30px;
    border-radius: 30px;
`;

export const UserName = styled.p`
    margin-top: 15px;
    color: var(--font);
`;

export const CardsUserDatas = styled.div`
    background-color: var(--white);
    box-shadow: var(--shadow);
    border-radius: 3px;
    padding: 15px 25px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: inherit;
    align-items: flex-end;
    height: 187px;
    width: 100%;
`;

export const ContainerInput = styled.div`
    width: 100%;
`;

export const FlexDefault = styled.div`
    display: flex;
    align-items: center;
    grid-gap: 12px;
    width: 100%;
`;

export const ContainerButton = styled.div`
    width: 150px;
`;
