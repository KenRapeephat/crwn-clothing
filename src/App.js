import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/hompage/hompages.component';

//import Homepage from './pages/hompage/hompages.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route  exact path='/'  component={HomePage}/>
        <Route  path='/hats'  component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
