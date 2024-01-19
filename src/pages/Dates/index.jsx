import './dates.css';
import React, { useState } from 'react';
import moment from 'moment';
import Week from './Week';
import DayNames from './DayNames';

const Calendar = () => {
  const currentMonth = moment();
  const monthsToShow = [currentMonth.clone()];

  for (let i = 1; i < 5; i++) {
    monthsToShow.push(currentMonth.clone().add(i, 'month'));
  }

  const [state, setState] = useState({
    months: monthsToShow,
    selected: moment().startOf('day'),
  });

  const select = (day) => {
    setState({
      ...state,
      selected: day.date,
    });
  };

  const renderWeeks = (month) => {
    let weeks = [];
    let done = false;
    let date = month.clone().startOf('month').add('w' - 1).day('Sunday');
    let count = 0;
    let monthIndex = date.month();

    const { selected } = state;

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
    const { months } = state;

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

export default Calendar;

