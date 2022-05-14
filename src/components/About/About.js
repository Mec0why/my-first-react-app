import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  return (
    <div>
      <div className={styles.hero}>
        <PageTitle>About</PageTitle>
        <p className={styles.subtitle}>
          Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>
    </div>
  );
};

export default About;
