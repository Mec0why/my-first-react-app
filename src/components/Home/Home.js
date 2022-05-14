import styles from './Home.module.scss';
import Hero from '../Hero/Hero.js';
import SearchForm from '../SearchForm/SearchForm.js';
import List from '../List/List.js';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <SearchForm />
      <List />
    </div>
  );
};

export default Home;
