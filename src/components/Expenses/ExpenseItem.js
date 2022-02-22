import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => { // здесь мы получаем пропс из ExpensesList с ключами title amount date
  return (
    <Card className='expense-item'>
       {/* Card блок куда мы передаём как пропс className  "expense-item" } */}



       {/* ExpenseDate отвечает за рендер даты */}
      <ExpenseDate date={props.date} />
      {/* передаём props.date через компоненте ExpenseDate */}


      <div className='expense-item__description'>
        <h2>
        {props.title}  
        </h2> 
        {/* выводим title* */}

        <div className='expense-item__price'>${props.amount}</div>
      </div>
      {/* выводим amount */}
    </Card>
  );
}

export default ExpenseItem;
