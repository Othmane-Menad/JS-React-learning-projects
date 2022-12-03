import react, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [Title, setTitle] = useState(props.Title);

  const clickHandler = () => {
    setTitle("Updated");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{Title}</h2>
        <div className="expense-item__price">{props.Price}</div>
      </div>
      <button onClick={clickHandler}>change Title</button>
    </Card>
  );
};

export default ExpenseItem;
