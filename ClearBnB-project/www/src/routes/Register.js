import React from 'react';
import '../style/Register.css';
const Register = () => {
  return (
    <div className="register">
      <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">Register</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        <div class="grid-item">
          <div class="inner-grid"><input required="firstName" key="1" placeholder="First name" /></div>

          <div class="inner-grid"><input required="lastName" key="2" placeholder="Last name" /></div>
          
          <div class="inner-grid"><input required="email" key="3" placeholder="email" /></div>
          
          <div class="inner-grid"><input required="password" key="4" placeholder="password" /></div>

          <div class="inner-grid"><input required="confirmPassword" key="5" placeholder="confirm password" /></div>

          <div class="inner-grid"><button className="registerButton" key="6">Register</button></div>

        </div>
        <div class="grid-item">6</div>
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>
      </div>
    </div>
  );
}
 
export default Register;