import styled from "styled-components";

export const ContainerPage = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px 0;
    margin-top: 70px;
    padding: 0 250px;
    box-sizing: border-box;
`;

export const ContainerAuth = styled.div`
    width: 400px;
    border: solid 1px var(--border-light);
    padding: 24px;
    border-radius: 7px;
    background-color: var(--white);
    box-shadow: var(--shadow);
`;

export const Title = styled.h2`
    font-size: 17px;
    margin-bottom: 4px;
`;

export const ContainerForm = styled.form`
    margin-top: 24px;

    input {
        margin-bottom: 12px;

        &::last-child {
            margin-bottom: 0;
        }
    }
`;

export const ForgotPassword = styled.a`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    text-decoration: underline;
`;

export const ContainerOptions = styled.div`
    margin-top: 36px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12px;
`;
