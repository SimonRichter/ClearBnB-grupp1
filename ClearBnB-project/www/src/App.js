import Nav from './components/Nav';
import './style/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { UserProvider } from './contexts/UserContextProvider';
import { UserContext } from './contexts/UserContextProvider';
import { ResidenceProvider } from './contexts/ResidenceContextProvider';
import { BookingProvider } from './contexts/BookingContextProvider';
import { FeatureProvider } from './contexts/FeatureContextProvider'
import Home from './routes/Home';
import About from './routes/About';
import Residences from './routes/Residences';
import ResidenceDetails from './routes/ResidenceDetails'
import MyBookings from './routes/MyBookings'
import Login from './routes/Login';
import Register from './routes/Register';
import { useEffect, useContext } from 'react';


function App() {

  return (
    <FeatureProvider>
    <BookingProvider>
    <ResidenceProvider>
    <UserProvider>
    <Router>
    <div className="App">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <Nav />
        <div className="wrapper"></div>
      <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/about" exact component={About} />   
          <Route path="/residences" exact component={Residences} />  
          <Route path="/login" exact component={Login} />  
          <Route path="/register" exact component={Register} />
          <Route path="/residence/:id" exact component={ResidenceDetails}/>    
      </Switch>
    </div>
    </Router>
    </UserProvider>
    </ResidenceProvider>
    </BookingProvider>
    </FeatureProvider>
  );
}

export default App;
