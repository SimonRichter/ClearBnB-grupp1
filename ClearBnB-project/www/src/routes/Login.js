import React from 'react'
import '../style/Login.css'

const Login = () => {
  return (  
    <div className="login">
      <div className="form-for-login">
      <form>
        <input required placeholder="Email.." type="email" />
        <input required placeholder="Password.." type="password" />
        <button>Login</button>
      </form>
      </div>
    </div>
  );
}
 
export default Login;