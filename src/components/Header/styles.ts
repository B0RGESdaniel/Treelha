import styled from "styled-components";

export const Container = styled.div`
    background: transparent;
    padding: 2px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 900px;
    margin: 15px auto;
    color: var(--green);
    font-weight: 700;
`;

export const ThinButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--water-green);
    border: none;
    background: transparent;

    &:hover {
        color: var(--green);
    }
`;