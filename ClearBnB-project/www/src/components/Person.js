import React from 'react'
import '../style/Person.css'
import FlipToBackIcon from '@material-ui/icons/FlipToBack';


const Person = ({person}) => {
  return (
    <div className="person">
    <div className="flip-card-person">
    <div className="flip-card-inner-person">
          <div className="flip-card-front-person">
            <div className="flipIcon"><FlipToBackIcon/></div>
            <img src={person.img} alt="" />
            <p>{person.name}</p>
            
      </div>
        <div className="flip-card-back-person">
            <p><span>NAME: </span>{person.name}</p>
            <p><span>NR: </span>{person.nr}</p>
            <p><span>EMAIL: </span>{person.email}</p>
        </div>
    </div>
    </div>
    </div>
  );
}

export default Person;
