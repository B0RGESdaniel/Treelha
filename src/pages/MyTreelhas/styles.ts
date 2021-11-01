import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;
`;

export const PageHeader = styled.div`
    
    display: flex;
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid var(--bright-water-green);
    
    button {
        padding: 0.7rem 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 0.5rem;
        color: #ffffff;
        background: var(--water-green);
        border: none;
        border-radius: 0.5rem;
        margin-left: auto;
        transition: filter linear 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const Empty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 7rem;
    flex-direction: column;
    text-align: center;
    gap: 2rem;

    img {
        width: 20rem;
    }

    h3 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--gray)
    }

    p {
        margin-top: 0.5rem;
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--gray);
        
    }
`;

export const TreelhaList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    list-style: none;
`;