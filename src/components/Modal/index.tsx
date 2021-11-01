import { motion, AnimatePresence } from 'framer-motion';
import { useHistory } from 'react-router-dom';
//import React, { Dispatch, SetStateAction } from 'react';

//import logoutImg from '../../assets/images/logout.svg';
//import closeModalImg from '../../assets/images/close-modal.svg';

import './styles.scss';

type ModalProps = {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;

}

export function Modal({showModal, setShowModal}: ModalProps){

    const modal = {
        visible: { y: "12px", opacity: 1, },
        hidden: { y: "-5vh", x:'-50px', opacity: 0 },
    }

    const history = useHistory();
    
    return(
        <AnimatePresence exitBeforeEnter>
            { showModal && (
                <motion.div
                 className="modal"
                 variants={modal}
                 initial="hidden"
                 animate="visible"
                 exit="hidden"
                 transition={{duration: 0.5}}
                >
                    <div className="modal-header">
                        <motion.button className="close-button" onClick={() => setShowModal(false)}>
                            <svg className="close" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <motion.path d="M13 10.9352L8.49604 6.48863L12.9377 2.00254L10.9352 0L6.487 4.50558L1.98575 0.0622917L0 2.04804L4.50721 6.51138L0.0622917 11.0143L2.04804 13L6.50975 8.49442L10.9975 12.9377L13 10.9352Z" fill="#2C5449"/>
                            </svg>
                        </motion.button>
                    </div>
                    <ul>
                        <li onClick={() => history.push('/treelhas')}>Minhas trilhas</li>
                    </ul>
                    <div className="separator"/>
                    <button className="logout-button">
                        {/* <img src={logoutImg} alt="Sair da conta" /> */}
                        <svg className="logout" width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path d="M13.3333 6.50002V3.16669L20 9.00002L13.3333 14.8334V11.5H6.66667V6.50002H13.3333ZM0 0.666687V17.3334H11.6667V15.6667H1.66667V2.33335H11.6667V0.666687H0Z" fill="#2C5449"/>
                        </svg>
                        Sair
                    </button>
                </motion.div> 
            ) }
        </AnimatePresence>
    )

}