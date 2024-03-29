import { useSelector } from 'react-redux';
import s from './style.module.css';

export function ExpenseTotal(props) {
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);
  const totalExpenses = expenseList.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  const defaultIncome = useSelector((store) => store.EXPENSE.income);
  const remainingMoney = defaultIncome - totalExpenses;
  return (
    <div className={s.container}>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>{totalExpenses} $</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>{remainingMoney} $</div>
      </div>
    </div>
  );
}
