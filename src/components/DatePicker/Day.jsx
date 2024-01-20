import React from 'react';

const Day = (props) => {
  const {
    day,
    day: {
      date,
      isCurrentMonth,
      isToday,
      number
    },
    select,
    selected
  } = props;

  const handleClick = () => {
    select(day);
  };

  return (
    <span 
      key={date.toString()} 
      className={"day" + (isToday ? " today" : "") + (isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")} 
      onClick={handleClick}>{number}</span>
  );
};

export default Day;
