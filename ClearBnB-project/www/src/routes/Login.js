import React, { useRef,useContext } from 'react'
import { UserContext } from '../contexts/UserContextProvider'
import '../style/Login.css'

const Login = () => {

  const { login } = useContext(UserContext);
  const { whoAmI } = useContext(UserContext);
  //const { whoIsOnline } = useContext(UserContext);
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
    if (res === 'error') {
      console.log('works');
    }
  }


  return (  
    <div className="login">
      <div className="form-for-login">
        <form onSubmit={tryToLogin}>
        <input ref={email} required placeholder="Email.." type="email" />
        <input ref={password} required placeholder="Password.." type="password" />
          <button>Login</button>
      </form>
      </div>
    </div>
  );
}
 
export default Login;