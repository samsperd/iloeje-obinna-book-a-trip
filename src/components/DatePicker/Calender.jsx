import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './dates.css';

const DatePicker = () => {
  const currentMonth = moment();
  const monthsToShow = [currentMonth.clone()];

  for (let i = 1; i < 5; i++) {
    monthsToShow.push(currentMonth.clone().add(i, 'month'));
  }

  const [selection, setSelection] = useState({
    months: monthsToShow,
    selected: moment().startOf('day'),
    
  })

  const select = (day) => {
    setSelection({
      ...selection,
      selected: day.date,
    });
  };

  const renderWeeks = (month) => {
    let weeks = [];
    let done = false;
    let date = month.clone().startOf('month').add('w' - 1).day('Sunday');
    let count = 0;
    let monthIndex = date.month();

    const { selected } = selection;

    while (!done) {
      weeks.push(
        <Week
          key={date}
          date={date.clone()}
          month={month}
          select={(day) => select(day)}
          selected={selected}
        />
      );

      date.add(1, 'w');

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  const renderMonths = () => {
    const { months } = selection;

    return months.map((month) => (
      <div key={month.format('YYYY-MM')} className="month-container my-6 text-justify">
        {renderMonthLabel(month)}
        {renderWeeks(month)}
      </div>
    ));
  };

  const renderMonthLabel = (month) => {
    return <span className="month-label text-lg mx-4 text-justify text-black">{month.format('MMMM YYYY')}</span>;
  };

  return (
    <div className="dates w-screen absolute top-0 bottom-0 left-0 right-0">
        <section className="calendar">
        <header className="header">
            <DayNames />
        </header>
        {renderMonths()}
        </section>

    </div>
  );
};


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

const Week = (props) => {
  const { date, month, selected, select } = props;

  const days = (() => {
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
        <Day
          key={day.number}
          day={day}
          selected={selected}
          select={select}
        />
      );

      date.add(1, "day");
    }

    return weekDays;
  })();

  return (
    <div className="row week text-black" key={days.length > 0 ? days[0].key : null}>
      {days}
    </div>
  );
};


const DayNames = () => {
  return (
    <div className="row day-names border-b border-gray-300 text-gray-500">
      <span className="day">Sun</span>
      <span className="day">Mon</span>
      <span className="day">Tue</span>
      <span className="day">Wed</span>
      <span className="day">Thu</span>
      <span className="day">Fri</span>
      <span className="day">Sat</span>
    </div>
  );
};

export default DatePicker;

