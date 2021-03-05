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
          <input required="firstName" placeholder="First name" />
          <input required="lastName" placeholder="Last name" />
          <input required="email" placeholder="email" />
          <input required="password" placeholder="password" />
          <input required="confirmPassword" placeholder="confirmPassword" />
          <button className="registerButton">Register</button>


          


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