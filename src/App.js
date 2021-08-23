import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/hompage/hompages.component';
import ShopPage from './pages/Shop/shop.component';

function App() {
  return (
    <div>
      <Switch>
        <Route  exact path='/'  component={HomePage}/>
        <Route  path='/shop'  component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
