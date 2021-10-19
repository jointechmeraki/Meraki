import styled from "styled-components";

export const ContainerItem = styled.div`
    background-color: var(--white);
    border-radius: 3px;
    box-shadow: var(--shadow);
    padding: 15px;
    box-sizing: border-box;
    margin-top: 10px;
`;

export const HeaderItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TitleItem = styled.h2`
    font-size: 14px;
`;

export const ContainerOptions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    i 
    {
        cursor: pointer;
        transition: var(--transition);
        
        &.edit
        {
            color: var(--warning);
            margin-right: 10px;

            &:hover
            {
                color: var(--warning-hover);
            }
        }
        
        &.remove
        {
            color: var(--error);

            &:hover
            {
                color: var(--error-hover);
            }
        }
    }
`;

export const ValueItem = styled.p`
    margin-top: 5px;
    color: var(--placeholder);
    width: 95%;
    line-height: 16px;
`;
