import styles from './NotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
  return (
    <div>
      <div className={styles.hero}>
        <PageTitle>404 Not Found</PageTitle>
        <p className={styles.subtitle}>Try Your Luck somewhere else, cowboy</p>
      </div>
    </div>
  );
};

export default NotFound;
