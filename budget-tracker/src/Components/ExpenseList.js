import React, { useContext, useState, useEffect } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "./../Context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredExpenses(expenses);
    setSearchText((s) => (s = ""));
  }, [expenses]);

  const searchExpense = (searchText) => {
    setSearchText((s) => (s = searchText));
    const filteredExpenses = expenses.filter((expense) =>
      expense.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredExpenses(filteredExpenses);
  };

  return (
    <div>
      <input
        className="form-control"
        required="required"
        id="name"
        type="text"
        placeholder="Type to search..."
        value={searchText}
        onChange={(event) => searchExpense(event.target.value)}
      ></input>
      <ul className="list-group mt-3">
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            id={expense.id}
            name={expense.name}
            cost={expense.cost}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
