import Nav from './components/Nav';
import './style/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { UserProvider, UserContext} from './contexts/UserContextProvider';
import { ResidenceProvider } from './contexts/ResidenceContextProvider';
import { BookingProvider } from './contexts/BookingContextProvider';
import { FeatureProvider } from './contexts/FeatureContextProvider'
import Home from './routes/Home';
import About from './routes/About';
import Residences from './routes/Residences';
import ResidenceDetails from './routes/ResidenceDetails'
import MyRentalDetailPage from './routes/MyRentalDetailPage'
import MyBookings from './routes/MyBookings'
import Login from './routes/Login';
import Register from './routes/Register';
import Page404 from './routes/Page404'
import { useContext } from 'react';
import AddResidence from './routes/AddResidence';
import MyRentals from './routes/MyRentals'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function App() {

  const { setLoginToast, loginToast, setLogoutToast, logoutToast } = useContext(UserContext);

    const handleCloseLogin = (reason) => {
    if (reason === 'clickaway') { return; }
    setLoginToast(false);
  };

  const handleCloseLogout = (reason) => {
    if (reason === 'clickaway') { return; }
    setLogoutToast(false);
  };

  const vertical = 'top'
  const horizontal = 'right'

  return (
   
    <FeatureProvider>
    <BookingProvider>
    <ResidenceProvider>
    
    <Router>
     <div className="App">
                         
     
                    
                
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <Nav />
        <div className="wrapper">
           <Snackbar className="toast"
            anchorOrigin={{ vertical, horizontal }}
            open={loginToast} autoHideDuration={1000} onClose={handleCloseLogin}>
          <Alert onClose={handleCloseLogin} severity="success">
          Logged in.
          </Alert>
            </Snackbar>
            <Snackbar className="toast"
              anchorOrigin={{ vertical, horizontal }}
              open={logoutToast} autoHideDuration={1000} onClose={handleCloseLogout}>
          <Alert onClose={handleCloseLogout} severity="success">
          Logged out.
          </Alert>
            </Snackbar>
       </div>
      <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/about" exact component={About} />   
          <Route path="/residences" exact component={Residences} />  
          <Route path="/login" exact component={Login} />  
          <Route path="/register" exact component={Register} />
          <Route path="/residence/:id" exact component={ResidenceDetails} /> 
          <Route path="/addResidence" exact component={AddResidence}/>        
          <Route path="/myBookings" exact component={MyBookings} /> 
          <Route path="/myRentals" exact component={MyRentals} />
          <Route path="/myRentalDetailPage/:id" exact component={MyRentalDetailPage}/>
          <Route path="*" component={Page404}/>
      </Switch>
    </div>
    </Router>
    </ResidenceProvider>
    </BookingProvider>
      </FeatureProvider>
      
  );
}

export default App;
