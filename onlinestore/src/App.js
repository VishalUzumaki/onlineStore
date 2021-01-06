
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/HomePage';
import Store from './components/Store';

function App() {
  return (

    <Router>

       <Switch>

        <Route path="/" exact component={HomePage}/>
        <Route path="/store" exact component={Store}/>

        </Switch>

    </Router>


  );
}

export default App;
