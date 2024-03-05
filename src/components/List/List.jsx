import { ListItem } from '../ListItem/ListItem';
import s from './style.module.css';

export function List({ items }) {
  return (
    <div style={{ overflowY: 'scroll', height: '40%' }}>
      <table className="table table-hover table-borderless">
        <tbody>
          {items.map((item, i) => {
            return <ListItem item={item} key={item.name + i} />;
          })}
        </tbody>
      </table>
    </div>
  );
}
