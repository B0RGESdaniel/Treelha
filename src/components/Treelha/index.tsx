import hikingIcon from '../../assets/images/hiking.svg'
import bikeIcon from '../../assets/images/bike.svg'
import walkIcon from '../../assets/images/walk.svg'

import settingsImg from '../../assets/images/settings.svg';
import checkImg from  '../../assets/images/check.svg';

import { Container, Content, Finished, TreelhaInfo, TypeIcon } from './styles';

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

    const today = new Date('2021-10-20');
    const treelhaDate = new Date(date);
    const dateDifference = Math.abs(today.getTime() - treelhaDate.getTime()); 
    const daysRemaining = Math.ceil(dateDifference / (1000 * 60 * 60 * 24));



    
    return(
        <Container>
            <Content>
                <TypeIcon>
                    { handleTypeIcon(type) }
                </TypeIcon>
                <TreelhaInfo>
                    <h1>{name}</h1>
                    { !(dateDifference <= 0) ? (                     
                        <span>Faltam <strong>{daysRemaining}</strong> dias</span>
                        ) : (
                            <Finished>
                                <span>Concluído</span><img className="check" src={checkImg} alt="Concluído" />
                            </Finished>
                        ) }
                </TreelhaInfo>
            </Content>
            <img src={settingsImg} alt="Editar trilha" />
        </Container>
    )
}