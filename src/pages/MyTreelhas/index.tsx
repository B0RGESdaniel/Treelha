//import { useState } from "react";
import { Header } from "../../components/Header";
import { PageHeader } from "../../components/PageHeader";
//import {motion, AnimateSharedLayout } from 'framer-motion';

import emptyImg from '../../assets/images/empty.svg';

import { useHistory } from "react-router-dom";
//import { Modal } from "../../components/Modal";

import './styles.scss';
//import { Treelha } from "../../components/Treelha";

export function MyTreelhas(){

    const empty =  true;
    const history = useHistory();

    function handleNewTreelha(){
        history.push('/treelhas/newtreelha')
    }

    return(
        <>
            <Header/>
            
            <main>
                <PageHeader navigateFunction={handleNewTreelha} title="Minhas trilhas"/>
                {/* <Treelha name="Pedra do elefante" date="26-10-2021" type="hiking"/> */}
                { empty ? (
                    <div className="empty">
                        <img className="empty-image" src={emptyImg} alt="Nenhuma trilha por enquanto" />
                        <div className="text">
                            <h3>Nenhuma trilha por enquanto...</h3>
                            <p>Crie sua primeira aventura!</p>
                        </div>
                    </div>
                ) : (
                    <div></div>
                ) }

            </main>
            
        </>           
    )
}