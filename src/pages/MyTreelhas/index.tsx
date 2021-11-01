//import { useHistory } from "react-router-dom";

import emptyImg from '../../assets/images/empty.svg';
import './styles.scss';
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

    return(
        <>
            <Header/>
            <Container>
                <PageHeader>
                    <button>
                        <img src={plusImg} alt="Adicionar" />
                        Nova Trilha
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
                        <Treelha name="Pedra do elefante" date="26-10-2021" type="hiking"/>
                    </TreelhaList>
                ) }

            </Container>
            
        </>           
    )
}