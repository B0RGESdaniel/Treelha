import hikingIcon from '../../assets/images/hiking.svg'
import bikeIcon from '../../assets/images/bike.svg'
import walkIcon from '../../assets/images/walk.svg'

import settingsImg from '../../assets/images/settings.svg';
import checkImg from  '../../assets/images/check.svg';

import './styles.scss';

type TreelhaData = {
    name: string;
    type: string;
    // style: string;
    // numberOfParticipants: number;
    // address: string;
    date: string;
    // time: string;
    // whatsappGroupLink: string;
}

export function Treelha({name, type, date}:TreelhaData){
    
    function handleTypeIcon(type: string){
        if(type === 'walk') return <img src={walkIcon} alt="Caminhada" />;
        if(type === 'hiking') return <img src={hikingIcon} alt="Trilha" />;
        if(type === 'bike') return <img src={bikeIcon} alt="Pedalada" />;
    }

    const today = new Date();
    const treelhaDate = new Date('2021-10-20');
    const dateDifference = Math.abs(today.getTime() - treelhaDate.getTime()); 
    const daysRemaining = Math.ceil(dateDifference / (1000 * 60 * 60 * 24));



    
    return(
        <div className="treelha">
            <div className="content">
                <div className="type-icon">
                    { handleTypeIcon(type) }
                </div>
                <div className="treelha-info">
                    <h1>{name}</h1>
                    { !(today === treelhaDate) ? (                     
                        <span>Faltam <strong>{daysRemaining}</strong> dias</span>
                        ) : (
                            <div className="finished">
                            <span>Concluído</span><img className="check" src={checkImg} alt="Concluído" />
                            </div>
                        ) }
                </div>
            </div>
            <img src={settingsImg} alt="Editar trilha" />
        </div>
    )
}