import { motion } from 'framer-motion';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Modal } from '../Modal';
import './styles.scss';




export function Header(){

    const { user } = useAuth();

    const [showModal, setShowModal] = useState(false);

    return(
        <>
        <div className="header">
            <div className="content">
                <motion.h1
                whileHover={{scale: 1.1, color: '#29B672'}}
                whileTap={{scale: 0.9, color: '#96C67F'}}
                >Treelha</motion.h1>
                <div className="user-info" onClick={() => setShowModal(!showModal)}>
                    <div className="user-info-content">
                        <p className="user-name">{user?.name}</p>
                        <img className="avatar" src={user?.avatar} alt={user?.name} /> 
                    </div>         
                    <Modal showModal={showModal} setShowModal={setShowModal}/>
                </div>
            </div>  
        </div>
        </>
    )
}