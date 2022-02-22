import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear]=useState('2022')                         

  const filterChangeHandler=(selectedYear)=>{
    setFilteredYear(selectedYear)

  } // метод который используется внутри компоненты expensesFilter вызывается как props для получения данных

const  filteredExpenses=props.items.filter(expense=>{
  return expense.date.getFullYear().toString()===filteredYear
})
  // let expensesContent=  <p style={{textAlign:'center' , color:'white'}}>No Expenses Found</p>

  // if(filteredExpenses>0){
  //   filteredExpenses.map((element)=>{
  //     return (
  //      <ExpenseItem
  //        key={element.id}
  //        title={element.title}
  //        amount={element.amount}
  //        date={element.date}
  //      />
  //     )
  //     });
  // }
   
  // if (filteredYear ==='ALL'){
  //   expensesContent=props.items.map((element)=>{
  //     return (
  //       <ExpenseItem
  //         key={element.id}
  //         title={element.title}
  //         amount={element.amount}
  //         date={element.date}
  //       />
  //     );
  //   })
  // }


  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses = {filteredExpenses} expensesYear={filteredYear} allExpense={props.items}/>
      <ExpensesList expenses={filteredExpenses} expensesYear={filteredYear} allExpense={props.items}/>;
      
      {/* SECOND VERSION */}
      {/* {filteredExpenses.length===0 && props.items.length===0 &&(
       <p style={{textAlign:'center' , color:'white'}}>No Expenses Found</p>
      )}

      {filteredExpenses.length>0&& filteredExpenses.map((element)=>{
         return (
          <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        );
      })}
      {filteredYear === 'ALL' &&props.items.map((element)=>{
         return (
          <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
         )
         })} */}
      {/* FIRST VERSION */}
      {/* {filteredExpenses.length === 0 ? 
        <p style={{textAlign:'center' , color:'white'}}>No Expenses Found</p>:
        filteredExpenses.map((element) => {
        return (
          <ExpenseItem
            key={element.id}
            title={element.title}
            amount={element.amount}
            date={element.date}
          />
        );
      })} */}
      
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}

    </Card>
  );
};

export default Expenses;
