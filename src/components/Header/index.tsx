import { ThinButton, Container, Content } from './styles';
import { FiChevronLeft } from 'react-icons/fi'; 

type HeaderProps = {
    text: string;
    action?: () => void;
}

export function Header({ text, action }:HeaderProps){
    return(
        <>
        <Container>
            <Content>
                <h1>Treelha</h1>
                <ThinButton onClick={action}>
                    <FiChevronLeft size={20}/>
                    { text }
                </ThinButton>
            </Content>  
        </Container>
        </>
    )
}