import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.Title}</h2>
        <div className="expense-item__price">{props.Price}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
