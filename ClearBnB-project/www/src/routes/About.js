import React from 'react'
import '../style/About.css'

const About = () => {
  return (
    <div className="about">
      <div className="grid-container">
        <div className="grid-item">
          <h2>About ClearBnB</h2>
          <p>ClearBnB was created on 16:th November 2007 by two young university students in their garage.
            The company stands for equal rights and have enrolled a diverse staff that helps us to create an environment where everyone can feel welcome and included.
            We also compensate for our CO2 emissions to 100% by planting trees in Malaysia and help conserving freshwater usage by instead using salt water to cool our servers.</p>
          <p>We believe that everyone should have access to shelter; wether they are on travels, are fleeing a war or have had their homes destroyed by a natural disaster.
            Therefore we donate 15% of our earnings to the Safe Home Association that helps people in need with housing.</p>
          <p>
            We are a steadily growing company with shares on the stock market. We hope you have a good experience using our service, and would appreciate it very much if you
            refer us to your friends and family. 
          </p>
        </div>
      </div>
    </div>
  );
}
 
export default About;