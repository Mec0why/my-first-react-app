import styles from './List.module.scss';
import { useSelector } from 'react-redux';
import { getAllColumns, getListById } from '../../redux/store';
import Column from '../Column/Column.js';
import ColumnForm from '../ColumnForm/ColumnForm';

const List = () => {
  const columns = useSelector(getAllColumns);
  const listData = useSelector((state) => getListById(state, 1));

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;
