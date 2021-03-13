import React, { useRef, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert';
import '../style/Login.css'

const Login = () => {

  const [open, setOpen] = React.useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
    
    

  const history = useHistory();
  const { login,whoIsOnline } = useContext(UserContext);
  const [failed, setFailed] = useState(false);


  const email = useRef()
  const password = useRef()

  const tryToLogin = async (e) => {
    e.preventDefault();

    const user = {
      email: email.current.value,
      password: password.current.value
    };
    
    const res = await login(user);
    console.log(res);
    if (!res) {
      setFailed(true);
    } else {
      setFailed(false);

      whoIsOnline();
      history.push("/")
      setOpen(true)
    }
  }
//        PROVA Göra allt i en Context(globalt) 

  return (  
    <div className="login">

      <div className="snackBarIndex" >

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Logged successed!
        </Alert>
      </Snackbar>
    </div>

      <div className="form-for-login">
        <form onSubmit={tryToLogin}>
        <input ref={email} required placeholder="Email.." type="email" />
          <input ref={password} required placeholder="Password.." type="password" />
          {failed && <p>Wrong username/password</p>}
          <button >Login</button>
          <div>  
    </div>
        </form>
        
      </div>
    </div>
  );
}
 
export default Login;