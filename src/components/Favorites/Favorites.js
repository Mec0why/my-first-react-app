import styles from './Favorites.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorites = () => {
  return (
    <div>
      <div className={styles.hero}>
        <PageTitle>Favorites</PageTitle>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Favorites;
