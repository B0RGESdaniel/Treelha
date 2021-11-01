import { useHistory } from 'react-router-dom';

import googleImg from '../../assets/images/google.svg';
import logoHomeImg from '../../assets/images/logo-home.svg';
import { useAuth } from '../../hooks/useAuth';

import { PageHome, Aside, AsideContent, Main, MainContent, LoginButton} from './styles';

export function Home(){

    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    async function handleSignInWithGoogle(){
        if(!user){
            await signInWithGoogle();
        }      
        history.push('/treelhas')
    }

    return(
        <PageHome>
            <Aside>
                <AsideContent>
                    <p>
                    “Não siga a estrada, apenas; <strong>ao contrário</strong>. Vá por onde não haja estrada e deixe uma <strong>trilha</strong>.”
                    </p>
                    <span>- Muriel Strode</span>
                </AsideContent>
            </Aside>
            <Main>
                <MainContent>
                    <img src={logoHomeImg} alt="Treelha" />
                    <LoginButton onClick={handleSignInWithGoogle}>
                        <img src={googleImg} alt="Logo google" />
                        Fazer login com o google
                    </LoginButton>
                    <span>For better experience, add a profile picture to your Google account.</span>
                </MainContent>
                <footer>
                    <p>2021 <strong>Treelha</strong> &copy; All rights reserved</p>
                </footer>
            </Main>
        </PageHome>
    )
}