import { useSelector } from 'react-redux';
import { ExpenseInput } from 'containers/ExpenseInput/ExpenseInput';
import { List } from 'components/List/List';
import { Logo } from 'components/Logo/Logo';
import s from './style.module.css';
import { IncomeInput } from 'containers/IncomeInput/IncomeInput';
import { ExpenseTotal } from 'containers/ExpenseTotal/ExpenseTotal';
import { ClearExpenses } from 'components/ClearExpenses/ClearExpenses';

export function App() {
  //useSelector is a hook from React-Redux, a function access data from the store
  //First parameter is access the whole store, second parameter is whatwe want to access in the store
  const expenseList = useSelector((store) => store.EXPENSE.expenseList);

  return (
    <div className={s.main_container}>
      <div className={`row ${s.header}`}>
        <div className={`col-3`}>
          <Logo title="XPENSES" subtitle="A well-controlled budget" />
        </div>
        <div className={`col-9 ${s.income_input}`}>
          <IncomeInput />
        </div>
      </div>
      <div className={`row ${s.workspace}`}>
        <div className={`col-12  ${s.expense_input}`}>
          <ExpenseInput />
        </div>
        <div className={`col-11 col-md-6 col-lg-4 ${s.expense_list}`}>
          <List items={expenseList} />
          <div className={`col-12 ${s.expense_total}`}>
            <ExpenseTotal />
          </div>
          {/* <div className={`col- ${s.clear}`}>
            <ClearExpenses />
          </div> */}
        </div>
      </div>
    </div>
  );
}
