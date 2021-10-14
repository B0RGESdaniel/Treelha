
import { useHistory } from 'react-router-dom';

import googleImg from '../../assets/images/google.svg';
import logoHomeImg from '../../assets/images/logo-home.svg';

import './styles.scss';

export function Home(){

    const history = useHistory();

    function handleSignInWithGoogle(){
        history.push('/treelhas')
    }

    return(
        <div id="page-home">
            <aside>
                <div className="aside-content">
                    <p>
                    “Não siga a estrada, apenas; <strong>ao contrário</strong>. Vá por onde não haja estrada e deixe uma <strong>trilha</strong>.”
                    </p>
                    <span>- Muriel Strode</span>
                </div>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoHomeImg} alt="Treelha" />
                    <button className="login-button" onClick={handleSignInWithGoogle}>
                        <img src={googleImg} alt="Logo google" />
                        Fazer login com o google
                    </button>
                <footer>
                    <p>2021 <strong>Treelha</strong> &copy; All rights reserved</p>
                </footer>
                </div>
            </main>
        </div>
    )
}