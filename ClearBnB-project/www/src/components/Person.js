import React from 'react'

const Person = ({person}) => {
  return (
    <div className="person">
    <div className="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
          <img src="https://cdn.discordapp.com/attachments/815586876261531659/821391699459702804/1581419371598.jpg" alt="" />
            <p>{person.name}</p>
      </div>
        <div class="flip-card-back">
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
