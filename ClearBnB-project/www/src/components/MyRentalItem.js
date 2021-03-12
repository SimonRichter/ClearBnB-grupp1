import React from 'react';

const MyRentalItem = ({rental}) => {
  return (
    <div className="myRentalItem">
      <p>{rental.title}</p>
    </div>
  );
}

export default MyRentalItem;