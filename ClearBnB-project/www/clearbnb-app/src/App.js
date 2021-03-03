import Nav from './components/Nav';
import './style/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routes/Home';
import About from './routes/About';
import Residences from './routes/Residences';
import Login from './routes/Login';
import Register from './routes/Register';


function App() {

  return (
    <Router>
    <div className="App">
      <Nav />
        <div className="wrapper"></div>
      <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/about" exact component={About} />   
          <Route path="/residences" exact component={Residences} />  
          <Route path="/login" exact component={Login} />  
          <Route path="/register" exact component={Register}/>  
      </Switch>
    </div>
    </Router>
  );
}

export default App;
