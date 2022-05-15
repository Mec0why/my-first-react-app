import styles from './Home.module.scss';
import Hero from '../Hero/Hero.js';
import Lists from '../Lists/Lists.js';

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero />
      <Lists />
    </div>
  );
};

export default Home;
