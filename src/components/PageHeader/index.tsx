import { motion } from 'framer-motion';

import plusImg from '../../assets/images/plus.svg';
import filterImg from '../../assets/images/filter.svg';

import './styles.scss';

type PageHeaderProps = {
    title: string;
    navigateFunction?: () => void;
}

export function PageHeader({title, navigateFunction}: PageHeaderProps){
    
    return(
        <div className="page-header">
            <div className="content">
                <motion.h1>{title}</motion.h1>
                <div className="menu">
                    <motion.img className="plus" onClick={navigateFunction} whileHover={{ filter: 'brightness(0.85)' }} src={plusImg} alt="Adicionar nova trilha" />
                    <motion.img className="filter" whileHover={{ filter: 'brightness(0.85)' }} src={filterImg} alt="Filtrar trilhas" />
                </div>
            </div>
        </div>
    )
}