import styled from "styled-components";

export const ContainerPage = styled.section`
    margin: 30px 0;
    margin-top: 70px;
    padding: 0 250px;
    box-sizing: border-box;
`;

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2
    {
        font-size: 21px;
    }
`;

export const ContainerMiniDashboard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
    border-bottom: solid 1px var(--border-light);
    padding-bottom: 12px;
    box-sizing: border-box;
`;