import React from 'react';

import './ExpenseDate.css';

const ExpenseDate = (props) => {
  // в пропс мы получаем дату под ключом date в виде new Date(дата)
  const month = props.date.toLocaleString('en-US', { month: 'long' }) // в переменную month получаем месяц в формате Например:"January";
  const day = props.date.toLocaleString('en-US', { day: '2-digit' })  // здесь получаем день в  двухзначном виде Н: 14;
  const year = props.date.getFullYear(); // а здесь получаем год в виде Н: 2022

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;
