import { motion } from 'framer-motion';
import { useAuth } from '../../hooks/useAuth';

import './styles.scss';

export function Header(){

    const { user } = useAuth();

    return(
        <div className="header">
            <motion.h1
             whileHover={{scale: 1.1, color: '#29B672'}}
             whileTap={{scale: 0.9, color: '#96C67F'}}
            >Treelha</motion.h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Minhas trilhas</li>
                </ul>
            </nav>
            <div className="user-info">
                <p className="user-name">{user?.name}</p>
                <img src={user?.avatar} alt={user?.name} />
            </div>
            
        </div>
    )
}