import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/hompage/hompages.component';
import ShopPage from './pages/Shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth} from './firebase/firebase.utils';
import React from 'react';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscibeFromAuth = null;

  componentDidMount(){
    this.unsubscibeFromAuth = auth.onAuthStateChanged(
      user => {
        this.setState({ currentUser: user});

        console.log(user);
      }
    );
  }

  componentWillUnmount (){
    this.unsubscibeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route  exact path='/'  component={HomePage}/>
          <Route  path='/shop'  component={ShopPage}/>
          <Route  path='/signin'  component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
