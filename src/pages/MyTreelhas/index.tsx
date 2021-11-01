//import { useHistory } from "react-router-dom";

import emptyImg from '../../assets/images/empty.svg';
import plusImg from '../../assets/images/plus.svg'
import { Treelha } from "../../components/Treelha";
import { Header } from "../../components/Header";
import { Container, PageHeader, Empty, TreelhaList } from './styles';

export function MyTreelhas(){

    const empty =  false;
    // const history = useHistory();

    // function handleNewTreelha(){
    //     history.push('/treelhas/newtreelha')
    // }

    const MOCK_TREELHAS = [
        {
            name: 'Pedra do elefante',
            type: 'hiking',
            date: '2021-10-28'
        },
        {
            name: 'Parque da cidade',
            type: 'walk',
            date: '2021-10-20'
        },
        {
            name: 'Sg - Cabo Frio',
            type: 'bike',
            date: '2021-10-26'
        },
    ]

    return(
        <>
            <Header/>
            <Container>
                <PageHeader>
                    <button>
                        <img src={plusImg} alt="Adicionar" />
                        Nova Treelha
                    </button>
                </PageHeader>
                { empty ? (
                    <Empty>
                        <img className="empty-image" src={emptyImg} alt="Nenhuma trilha por enquanto" />
                        <div>
                            <h3>Nenhuma trilha por enquanto...</h3>
                            <p>Crie sua primeira aventura!</p>
                        </div>
                    </Empty>
                ) : (
                    <TreelhaList>
                        { MOCK_TREELHAS.map(treelha => (
                            <li>
                                <Treelha name={treelha.name} type={treelha.type} date={treelha.date}/>
                            </li>
                        )) }
                    </TreelhaList>
                ) }

            </Container>
            
        </>           
    )
}