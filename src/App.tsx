import { BrowserRouter, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { MyTreelhas } from './pages/MyTreelhas';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/treelhas" component={MyTreelhas}/>
    </BrowserRouter>
  );
}

export default App;
