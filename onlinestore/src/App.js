
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/Nav';
import HomePage from './components/HomePage';
import Store from './components/Store';
import Cart from './components/Cart';


function App() {
  return (

    <Router>

        <Nav/>
       <Switch>

        <Route path="/" exact component={HomePage}/>
        <Route path="/store" exact component={Store}/>
        <Route path="/cart" exact component={Cart}/>
      


        </Switch>


    </Router>


  );
}

export default App;
