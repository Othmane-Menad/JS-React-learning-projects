import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setenteredTitle] = useState("");
  const titleChangeHandler = (e) => {
    setenteredTitle(e.target.value);
  };

  const [enteredAmount, setenteredAmount] = useState("");
  const amountChangeHandler = (e) => {
    setenteredAmount(e.target.value);
  };

  const [enteredADate, setenteredDate] = useState("");
  const dateChangeHandler = (e) => {
    setenteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); // so when submitting it won't refresh the page
    const expenseData = {
      title: enteredTitle,

      amount: +enteredAmount,
      date: new Date(enteredADate),
    };

    props.onSaveExpenseData(expenseData);
    // to empty form inputs
    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredADate}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
