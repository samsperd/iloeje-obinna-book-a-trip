import React, { useState, useEffect } from 'react';
import Day from './Day'; // Make sure to import Day component if it's in a separate file

const Week = (props) => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    let { date } = props;
    const { month, selected, select } = props;
    let weekDays = [];

    for (let i = 0; i < 7; i++) {
      let day = {
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date
      };

      weekDays.push(
        <Day key={day.number}
          day={day}
          selected={selected}
          select={select} />
      );

      date = date.clone();
      date.add(1, "day");
    }

    setDays(weekDays);
  }, [props]); // Make sure to include all dependencies that are being used inside the effect

  return (
    <div className="row week text-black border" key={days.length > 0 ? days[0].key : null}>
      {days}
    </div>
  );
};

export default Week;
