import s from './style.module.css';
// import { deleteListItem } from 'store/expense/expense-slice';

export function ListItem({ item }) {
  return (
    <tr>
      <th className={s.name}>{item.name}</th>
      <td className={s.price}>{item.price} $</td>
      {/* <button onClick={() => deleteListItem(this.expenseList.id)}>Clear</button> */}
    </tr>
  );
}
