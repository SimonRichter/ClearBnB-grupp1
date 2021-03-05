import React from 'react';
import '../style/Register.css';
import {useRef} from 'react'

function CreateUser() {
  
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const createUser = async e => {
    const user = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      password: password.current.value,
      confirmPassword: confirmPassword.current.value
    }
    await addUser(user)

    history.push('/user/' + user.id)
  }

  const Register = () => {
    return (
      <div className="register">
        <div class="grid-container">
          <div class="grid-item">1</div>
          <div class="grid-item">Register</div>
          <div class="grid-item">3</div>
          <div class="grid-item">4</div>
          <div class="grid-item">
            <form key="1" style={styles.form} onSubmit={createUser}>
              <div class="inner-grid"><input required ref={firstName} key="2" style={styles.input} placeholder="First name" /></div>

              <div class="inner-grid"><input required ref={lastName} key="3" style={styles.input} placeholder="Last name" /></div>

              <div class="inner-grid"><input required ref={email} key="4" style={styles.input} placeholder="email" /></div>

              <div class="inner-grid"><input required ref={password} key="5" style={styles.input} placeholder="password" /></div>

              <div class="inner-grid"><input required ref={confirmPassword} key="6" style={styles.input} placeholder="confirm password" /></div>

              <div class="inner-grid">
                <button className="registerButton" key="7" style={{ ...styles.input, ...styles.button }}>Register</button>
              </div>
            </form>
          </div>
          <div class="grid-item">6</div>
          <div class="grid-item">7</div>
          <div class="grid-item">8</div>
          <div class="grid-item">9</div>
        </div>
      </div>
    );
  }
}

 
export default Register(createUser);