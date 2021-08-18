import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("All");
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  let filterData = "";
  filteredYear === "All"
    ? (filterData = props.items)
    : (filterData = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
      }));

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterData} />
        <ExpensesList items={filterData} />
        {/* {filterData.length === 0 && <p>No Expense Found.</p>}
        {filterData.length > 0 &&
          filterData.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* <ExpenseItem title={props.items[0].title} />
        <ExpenseItem title={props.items[1].title} />
        <ExpenseItem title={props.items[2].title} />
        <ExpenseItem title={props.items[3].title} /> */}
      </Card>
    </div>
  );
};

export default Expenses;
