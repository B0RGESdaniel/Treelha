import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { MyTreelhas } from './pages/MyTreelhas';
import { NewTreelha } from './pages/NewTreelha';
import { AuthContextProvider } from './contexts/AuthContext';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/treelhas" exact component={MyTreelhas}/>
            <Route path="/treelhas/newtreelha" component={NewTreelha}/>
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
      <GlobalStyle/>
    </>
  );
}

export default App;
