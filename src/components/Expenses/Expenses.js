import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

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
        {filterData.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {/* <ExpenseItem title={props.items[0].title} />
        <ExpenseItem title={props.items[1].title} />
        <ExpenseItem title={props.items[2].title} />
        <ExpenseItem title={props.items[3].title} /> */}
      </Card>
    </div>
  );
};

export default Expenses;
