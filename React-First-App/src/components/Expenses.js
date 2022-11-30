import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  // After props always should be expenses because we declared it in App.js as expenses=expenses_
  return (
    <div className="expenses">
      <ExpenseItem
        Title={props.items[0].title}
        date={props.items[0].date}
        Price={props.items[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        Title={props.items[1].title}
        date={props.items[1].date}
        Price={props.items[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        Title={props.items[2].title}
        date={props.items[2].date}
        Price={props.items[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        Title={props.items[3].title}
        date={props.items[3].date}
        Price={props.items[3].amount}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
