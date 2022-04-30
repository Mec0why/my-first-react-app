import styles from './List.module.scss';
import Column from '../Column/Column.js';

const List = () => {
  return (
    <div>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span>soon!</span>
        </h2>
      </header>
      <p className={styles.description}>
        Interesting things I want to check out
      </p>
      <section className={styles.columns}>
        <Column icon='book'>Books</Column>
        <Column icon='film'>Movies</Column>
        <Column icon='gamepad'>Games</Column>
      </section>
    </div>
  );
};

export default List;
