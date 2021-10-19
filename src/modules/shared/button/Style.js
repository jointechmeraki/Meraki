import styled from "styled-components";

export const ButtonStyle = styled.button`
    border: none;
    height: 30px;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    border-radius: 3px;
    cursor: pointer;
    transition: var(--transition);
    background-color: var(--action);
    color: var(--white);

    &:hover
    {
        background-color: ${props => props.secundary ? "var(--placeholder)" : "var(--action-hover)" };
    }
    
    &.secondary
    {
        background-color: var(--border-light);
        color: var(--font-light);
        
        &:hover
        {
            background-color: var(--placeholder);
        }
    }
`;