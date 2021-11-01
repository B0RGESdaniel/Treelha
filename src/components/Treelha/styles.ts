import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 750px;
    background-color: #ffffff;
    margin-top: 0.8rem;
    border-radius: 1rem;
    //border: 1px solid var(--water-green);
    padding: 1rem 2.15rem 1rem 1.25rem;
    cursor: pointer;
    transition: all linear 0.2s;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);

    &:hover {
        transform: translateX(1rem);
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.3rem;
`;

export const TypeIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
    background: var(--icon-gradient);
`;

export const TreelhaInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2px 0;
    color: var(--dark-green);
    font-size: 0.9rem;

    h1 {
        font-size: 1.5rem;
    }

    strong {
        color: var(--bright-water-green);
    }
`;

export const Finished = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    img {
        width: 1rem;    
    }
`;
