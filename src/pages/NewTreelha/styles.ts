import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 8px 24px rgba(0, 0, 0, 0.4);
    border-radius: 1rem;
    background-color: #fff;
    max-width: 42rem;
    margin: 3.5rem auto 1rem;
    padding: 3.25rem 4rem;
`;

export const Form = styled.form`
    display: grid;
    grid-template-areas: 
        'nome nome nome nome'
        'type type tstyle tstyle'
        'place place place place'
        'day day time time'
        'people x x x '
        'zap zap zap zap'
        'button button button button'
    ;
    grid-gap: 1.25rem;


    width: 100%;

    input#name {
        border: 1px solid var(--gray-green);
        border-radius: 10px;
        height: 3.44rem;
        padding: 1rem;
        outline: 0;
        grid-area: nome;

        &::placeholder {
            color: var(--gray-green);
            font-size: 1.25rem;
        }

        &:focus {
            border: 2px solid var(--bright-water-green);
        }
    }

    label {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        color: var(--green);
        font-size: 1.25rem;
        font-weight: 600;

        input {
            font-size: 1rem;
            font-weight: normal;
        }
    }

    label#lplace {
        grid-area: place;
    }
    label#ltype {
        grid-area: type;
    }
    label#lstyle {
        grid-area: tstyle;
    }

    label#lwhatsapp {
        grid-area: zap;
    }
    label#lday {
        grid-area: day;
    }
    label#ltime {
        grid-area: time;
    }
    label#lpeople {
        grid-area: people;
    }

    button {
        grid-area: button;
        width: 100%;
        height: 3.25rem;
        border: none;
        background: var(--water-green);
        color: #fff;
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
        border-radius: 0.75rem;

        font-size: 1.5rem;
        font-weight: 800;
        
        transition: background-color linear 0.2s;

        &:hover {
            background: var(--bright-water-green);
        }
    }
`;

export const InputField = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.8rem;
    border: 1px solid var(--gray-green);
    border-radius: 10px;
    height: 3.44rem;
    padding: 1rem;
    outline: 0;
    appearance: none;

    &:focus-within {
        border: 2px solid var(--bright-water-green);


        svg {
            color: var(--bright-water-green);
        }
            
    }

    input {
        border: none;
        flex: 1;

        &::placeholder {
            color: var(--gray-green);
        }
    }

    svg {
        color: var(--gray-green)
    }

    input[type="date"]::-webkit-inner-spin-button,
    input[type="date"]::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
    }
    input[type="time"]::-webkit-calendar-picker-indicator {
        background: none;
    }
`;

export const SelectField = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--gray-green);
    border-radius: 10px;
    height: 3.44rem;
    padding: 1rem;
    outline: 0;

    select {
        appearance: none;
        border: none;
        flex: 1;
    }

    svg {
        color: var(--gray-green)
    }

    &:focus-within {
        border: 2px solid var(--bright-water-green);
    }

`;