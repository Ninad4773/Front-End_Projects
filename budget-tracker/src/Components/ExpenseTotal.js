import React, { useContext } from "react";
import { AppContext } from "./../Context/AppContext";

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);

  const totalExpense = expenses.reduce((total, expense) => {
    return (total = total + expense.cost);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>Spent so far: ${totalExpense}</span>
    </div>
  );
};

export default ExpenseTotal;
