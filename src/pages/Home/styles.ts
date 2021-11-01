import styled from "styled-components";
import backgroundImage from '../../assets/images/bg-home.jpg';

export const PageHome = styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
`;

export const Aside = styled.aside`
    flex: 7;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background:  var(--home-gradient), url(${backgroundImage}) no-repeat;
    background-size: 100%;
    background-position: 10% 90%;
`;

export const AsideContent = styled.div`
    flex: 7;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    margin-left: 44px;

    p {
        max-width: 532px;
    }

    color: #FFFFFF;
    font-weight: 600;
    font-size: 36px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);

    strong {
        color: var(--water-green);
    }

    span {
        font-style: italic;
        font-weight: normal;
        font-size: 24px;
    }
`;

export const Main = styled.main`
    flex: 8;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;

    footer {
        position: fixed;
        margin-bottom: 10px;
        bottom: 0;
        width: 100%;
        text-align: center;
        font-size: 14px;

        strong {
            color: var(--bright-green);
        }
    }
`;

export const MainContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 37px;

    span {
        text-align: center;
        max-width: 300px;
        font-size: 12px;
        color: var(--green);
    }
`;

export const LoginButton = styled.button`
    width: 300px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background-color: #ea4335;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
        margin-right: 8px;
    }

    &:hover {
        filter: brightness(0.9);
    }
`;