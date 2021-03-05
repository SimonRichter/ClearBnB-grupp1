import React, {useRef} from 'react'
import '../style/Login.css'

const Login = () => {

  const email = useRef()
  const password = useRef()

  const login = e => {
    e.preventDefault();
    //Code to login with DB
  }

  return (  
    <div className="login">
      <div className="form-for-login">
        <form onSubmit={login}>
        <input ref={email} required placeholder="Email.." type="email" />
        <input ref={password} required placeholder="Password.." type="password" />
        <button>Login</button>
      </form>
      </div>
    </div>
  );
}
 
export default Login;